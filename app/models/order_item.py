from sqlalchemy import ForeignKey
from .db import db

class OrderItem(db.Model):
    __tablename__ = "order_items"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, ForeignKey("products.id", ondelete="CASCADE"))
    order_history_id = db.Column(db.Integer, ForeignKey("order_histories.id", ondelete="CASCADE"))
    qty = db.Column(db.Integer)

    products = db.relationship("Product", back_populates="order_items")
    order_histories = db.relationship("OrderHistory", back_populates="order_items")



def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'order_history_id': self.order_history_id,
            'qty': self.qty
    }
