from re import M
from flask import Blueprint, jsonify, request
from flask_login import login_required
from datetime import datetime
from app.models import Review, db
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews': [reviews.to_dict() for reviews in reviews]}

@review_routes.route('/new', methods=["POST"])
def post_new_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_review = Review(
           product_id=data['product_id'],
           user_id=data['user_id'],
           rating=data['rating'],
           title=data['title'],
           content=data['content'],
           recommend=data['recommend'],
           created_at=datetime.now(),
           updated_at=datetime.now()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route('/<int:id>', methods=["PUT"])
def edit_review(id):
    review = Review.query.get(id)
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        review.rating=data['rating']
        review.title=data['title']
        review.content=data['content']
        review.recommend=data['recommend']
        review.updated_at=datetime.now()

        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return "Review was successfully deleted"
