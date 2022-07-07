from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='Lition',username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        first_name='Marnie', last_name='Darnie',username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        first_name='Bobbie', last_name='Hill',username='bobbie', email='bobbie@aa.io', password='password')
    boba_protein = User(
        first_name='Boba', last_name='Protein',username='Boba Protein', email='boba_protein@aa.io', password='password')
    blender_bottle = User(
        first_name='Blender', last_name='Bottle',username='BlenderBottle', email='blender_bottle@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(boba_protein)
    db.session.add(blender_bottle)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
