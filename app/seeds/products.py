from app.models import db, Product, Category


# Adds a demo user, you can add other users here if you want
def seed_products():
    matcha_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Matcha Latte (2.37lbs)',price=44.99, description='''Our Matcha Latte drink includes hand-picked, shade-grown matcha directly from Nishio, Japan.
        \nOur matcha drink is unmatched by providing a bold taste, an antioxidant profile that is five times more abundant than any other known natural fruit or vegetable, and also includes an organic greens blend and probiotics for additional health benefits.''',
    image_url_1='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/Week1_Master_MatchaBagPhotoshoot_94b59f28-595a-4954-a92f-3a4a562239a4_1600x.png?v=1647277817',
    image_url_2='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/ProteinBagMockupMaster_MatchaLatte_Back_1_dee54623-d31e-4f47-b6bf-8a2b7dfadd1a_1600x.png?v=1653147496',
    image_url_3='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/NutritionFacts_Matcha_1_d8d493d3-6525-4037-812e-2e131c78f543_1600x.png?v=1653147496',
    overall_rating=5,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    db.session.add(matcha_boba)

    db.session.commit()



def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
