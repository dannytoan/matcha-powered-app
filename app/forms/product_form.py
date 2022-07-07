from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from sqlalchemy import DateTime
from app.models import Product


class ProductForm(FlaskForm):
    user_id = IntegerField('User ID')
    product_name = StringField('Product Name', validators=[DataRequired()])
    price = FloatField('Price', validators=[DataRequired()])
    inventory = TextAreaField('Description', validators=[DataRequired()])
    category_id = IntegerField("Category", validators=[DataRequired()])
    description = StringField('password', validators=[DataRequired()])
    image_url_1 = StringField('Image Url 1', validators=[DataRequired()])
    image_url_2 = StringField('Image Url 2', validators=[DataRequired()])
    image_url_3 = StringField('Image Url 3', validators=[DataRequired()])
    image_url_4 = StringField('Image Url 4', validators=[DataRequired()])
    image_url_5 = StringField('Image Url 5', validators=[DataRequired()])
    image_url_6 = StringField('Image Url 6', validators=[DataRequired()])
    created_at = DateTime('created_at')
    updated_at = DateTime('updated_at')
    submit = SubmitField('Submit')
