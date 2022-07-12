from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import OrderHistory
from datetime import datetime

order_history_routes = Blueprint('order_histories', __name__)

# @order_history_routes("/new", methods=["POST"])
# def checkout():
