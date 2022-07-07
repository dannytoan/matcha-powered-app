from .db import db

class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id', ondelete="CASCADE"))
    image_url = db.Column(db.String, nullable=False)

    products = db.relationship("Product", back_populates="images")


    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'image_url': self.image_url,
    }
