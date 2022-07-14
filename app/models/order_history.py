from sqlalchemy import ForeignKey
from .db import db

class OrderHistory(db.Model):
    __tablename__ = "order_histories"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey("users.id"))
    date = db.Column(db.DateTime)

    users = db.relationship("User", back_populates="order_histories")
    order_items = db.relationship("OrderItem", back_populates="order_histories")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'date': self.date,
    }
