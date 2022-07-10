from .db import db

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id', ondelete="CASCADE"))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    reviewer_name = db.Column(db.String(50), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(50), nullable=False)
    content = db.Column(db.Text, nullable=False)
    recommend = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    products = db.relationship("Product", back_populates="reviews")
    users = db.relationship("User", back_populates="reviews")


    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'reviewer_name': self.reviewer_name,
            'rating': self.rating,
            'title': self.title,
            'content': self.content,
            'recommend': self.recommend,
            'created_at': self.created_at,
            'updated_at': self.updated_at
    }
