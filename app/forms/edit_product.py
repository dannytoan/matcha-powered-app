from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from sqlalchemy import DateTime


class EditProductForm(FlaskForm):
    inventory = IntegerField('inventory', validators=[DataRequired()])
    product_name = StringField('product_name', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    category_id = IntegerField("category_id")
    image_url_1 = StringField('image_url_1', validators=[DataRequired()])
    image_url_2 = StringField('image_url_2')
    image_url_3 = StringField('image_url_3')
    image_url_4 = StringField('image_url_4')
    image_url_5 = StringField('image_url_5')
    image_url_6 = StringField('image_url_6')
    updated_at = DateTime('updated_at')
    submit = SubmitField('Submit')
