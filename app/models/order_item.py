from sqlalchemy import ForeignKey
from .db import db

class OrderItem(db.Model):
    __tablename__ = "order_items"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, ForeignKey("products.id", ondelete="CASCADE"))
    order_history_id = db.Column(db.Integer, ForeignKey("order_histories.id", ondelete="CASCADE"))
    product_image_url = db.Column(db.String)
    product_name = db.Column(db.String)
    product_price = db.Column(db.Integer)
    qty = db.Column(db.Integer)

    products = db.relationship("Product", back_populates="order_items")
    order_histories = db.relationship("OrderHistory", back_populates="order_items")



    def to_dict(self):
            return {
                'id': self.id,
                'product_id': self.product_id,
                'product_image_url': self.product_image_url,
                'product_name': self.product_name,
                'product_price': self.product_price,
                'order_history_id': self.order_history_id,
                'qty': self.qty,
        }
