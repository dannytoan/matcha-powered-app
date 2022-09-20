import re
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, db, Image
from datetime import datetime
from app.forms import ProductForm, EditProductForm
from app.aws_helper import (
    upload_file_to_s3, allowed_file, get_unique_filename, upload)

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

    image_urls = [];

    print("=============REQUEST====================", request.files)

    for key in request.files.keys():
        image = request.files[key]
        image_url = upload(image)
        image_urls.append(image_url)
        print("=========IMAGES=========", image)
        print("=========IMAGE URL=========", image_url)

    # if "image_url_1" not in request.files:
    #     return {"errors": "image required"}, 400

    if "image_url_2" not in request.files:
        image_urls.append("")
    if "image_url_3" not in request.files:
        image_urls.append("")
    if "image_url_4" not in request.files:
        image_urls.append("")
    if "image_url_5" not in request.files:
        image_urls.append("")
    if "image_url_6" not in request.files:
        image_urls.append("")

    print("===================IMAGE URLS=================", image_urls)
    print("=============REQUEST=====================", request.files)
    # print("===========IMG URL 2==========", request.files["image_url_2"])


    # image = request.files["image_url_1"]

    # for image in request.files:
    #     print("======= IMAGE IN REQUEST.FILES ============", image)
        # if not allowed_file(image.filename):
        #     return {"errors": "file type not permitted"}, 400

    # if not allowed_file(image.filename):
    #     return {"errors": "file type not permitted"}, 400

    # image.filename = get_unique_filename(image.filename)

    # upload = upload_file_to_s3(image)

    # if "url" not in upload:
    #     # if the dictionary doesn't have a url key
    #     # it means that there was an error when we tried to upload
    #     # so we send back that error message
    #     return upload, 400

    # url = upload["url"]


    if form.validate_on_submit():
        data = form.data
        new_product = Product(
            user_id=data['user_id'],
            inventory=data['inventory'],
            product_name=data['product_name'],
            price=data['price'],
            description=data['description'],
            category_id=data['category_id'],
            image_url_1=image_urls[0],
            image_url_2=image_urls[1],
            image_url_3=image_urls[2],
            image_url_4=image_urls[3],
            image_url_5=image_urls[4],
            image_url_6=image_urls[5],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_product)
        db.session.commit()

        return new_product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@product_routes.route('/<int:id>',)
def product_details(id):
    product = Product.query.get(id)
    return product.to_dict()

@product_routes.route('/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.filter_by(id = id)
    product.delete()
    db.session.commit()

    return "Product was successfully deleted."


@product_routes.route('/<int:id>', methods=['PUT'])
def edit_product(id):
    product = Product.query.get(id)
    form = EditProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    image_urls = [];

    for key in request.files.keys():
        image = request.files[key]
        image_url = upload(image)
        image_urls.append(image_url)
        print("=========IMAGES=========", image)
        print("=========IMAGE URL=========", image_url)

    print ("==============IMAGE URLS================", image_urls)

    data = form.data

    if "image_url_1" in data:
        image_urls.append(product.image_url_1)
    if "image_url_2" in data:
        image_urls.append(product.image_url_2)
    if "image_url_3" in data:
        image_urls.append(product.image_url_3)
    if "image_url_4" in data:
        image_urls.append(product.image_url_4)
    if "image_url_5" in data:
        image_urls.append(product.image_url_5)
    if "image_url_6" in data:
        image_urls.append(product.image_url_6)


    if "image_url_1" not in data:
        image_urls.append("")
    if "image_url_2" not in request.files or data:
        image_urls.append("")
    if "image_url_3" not in request.files or data:
        image_urls.append("")
    if "image_url_4" not in request.files or data:
        image_urls.append("")
    if "image_url_5" not in request.files or data:
        image_urls.append("")
    if "image_url_6" not in request.files or data:
        image_urls.append("")

    print("=================DATA=================", form.data)

    if form.validate_on_submit():
        product.inventory=data['inventory']
        product.product_name=data['product_name']
        product.price=data['price']
        product.description=data['description']
        product.category_id=data['category_id']
        product.image_url_1=image_urls[0]
        product.image_url_2=image_urls[1]
        product.image_url_3=image_urls[2]
        product.image_url_4=image_urls[3]
        product.image_url_5=image_urls[4]
        product.image_url_6=image_urls[5]
        product.updated_at=datetime.now()

        db.session.commit()
        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
