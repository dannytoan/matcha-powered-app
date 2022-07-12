from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import OrderItem
from datetime import datetime

order_item_routes = Blueprint('order_items', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@order_item_routes.route('/')
def products():
    print(request.json['shoppingBag'])
    order_items = OrderItem.query.all()
    return {'order_items': [order_item.to_dict() for order_item in order_items]}

# @order_item_routes("/checkout", methods=["POST"])
# def checkout():
#     pass
