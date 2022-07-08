
from .db import db

class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete="CASCADE"))
    inventory = db.Column(db.Integer, nullable=False)
    product_name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url_1 = db.Column(db.String, nullable=False)
    image_url_2 = db.Column(db.String, nullable=True)
    image_url_3 = db.Column(db.String, nullable=True)
    image_url_4 = db.Column(db.String, nullable=True)
    image_url_5 = db.Column(db.String, nullable=True)
    image_url_6 = db.Column(db.String, nullable=True)
    overall_rating = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id', ondelete="CASCADE"))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    users = db.relationship("User", back_populates="products")
    reviews = db.relationship("Review", back_populates="products", cascade="all, delete")
    categories = db.relationship("Category", back_populates="products")
    images = db.relationship("Image", back_populates="products", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'inventory': self.inventory,
            'product_name': self.product_name,
            'price': self.price,
            'description': self.description,
            'overall_rating': self.overall_rating,
            'image_url_1': self.image_url_1,
            'image_url_2': self.image_url_2,
            'image_url_3': self.image_url_3,
            'image_url_4': self.image_url_4,
            'image_url_5': self.image_url_5,
            'image_url_6': self.image_url_6,
            'created_at': self.created_at,
            'updated_at': self.updated_at
    }
