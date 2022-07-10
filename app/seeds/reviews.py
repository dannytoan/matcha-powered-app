from app.models import db, Review

def seed_reviews():
    matcha_boba_review_1 = Review(product_id=1, user_id=2, reviewer_name="Marnie", rating=5, title="Amazing!!", content="Tastes exactly like it’s from a boba shop! And you’re getting protein!", recommend=True, created_at='2022-07-06')

    db.session.add(matcha_boba_review_1)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
