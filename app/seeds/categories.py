from app.models import db, Category

def seed_categories():
    womens = Category(id=1, category_name='womens')
    mens = Category(id=2, category_name='mens')
    accessories = Category(id=3, category_name='accessories')
    supplements = Category(id=4, category_name='supplements')
    equipment = Category(id=5, category_name='equipment')


    db.session.add(womens)
    db.session.add(mens)
    db.session.add(accessories)
    db.session.add(supplements)
    db.session.add(equipment)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
