from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Product, db
from datetime import datetime
from app.forms import ProductForm

product_routes = Blueprint('products', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@product_routes.route('/')
def products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/new', methods=["POST"])
def new_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_product = Product(
            user_id=data['user_id'],
            inventory=data['inventory'],
            product_name=data['product_name'],
            price=data['price'],
            description=data['description'],
            category_id=data['category_id'],
            image_url_1=data['image_url_1'],
            image_url_2=data['image_url_2'],
            image_url_3=data['image_url_3'],
            image_url_4=data['image_url_4'],
            image_url_5=data['image_url_5'],
            image_url_6=data['image_url_6'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
