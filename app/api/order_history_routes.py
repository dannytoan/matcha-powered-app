from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import OrderHistory
from datetime import datetime

order_history_routes = Blueprint('order_histories', __name__)

@order_history_routes.route('/')
def get_order_history():
    order_histories = OrderHistory.query.all()
    return {'order_history': [order_history.to_dict() for order_history in order_histories]}

@order_history_routes.route('/new') #post, rememebr to add method
def create_order_history():
    # order_histories = OrderHistory.query.all()
    # return {'order_history': [order_history.to_dict() for order_history in order_histories]}
    bag = request._get_json()['shoppingBag']
    print("------BAG--------", bag)
