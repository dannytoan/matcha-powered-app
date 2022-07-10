from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from sqlalchemy import DateTime
from app.models import Review


class ReviewForm(FlaskForm):
    product_id = IntegerField('Product ID')
    user_id = IntegerField('User ID')
    reviewer_name = StringField('Reviewer Name', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    content = TextAreaField('Content', validators=[DataRequired()])
    recommend = BooleanField("Recommend")
    created_at = DateTime('created_at')
    updated_at = DateTime('updated_at')
    submit = SubmitField('Submit')
