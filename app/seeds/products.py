from app.models import db, Product

# Adds a demo user, you can add other users here if you want
def seed_products():
    matcha_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Matcha Latte (2.37lbs)',price=44.99, description='''Our Matcha Latte drink includes hand-picked, shade-grown matcha directly from Nishio, Japan.
        \nOur matcha drink is unmatched by providing a bold taste, an antioxidant profile that is five times more abundant than any other known natural fruit or vegetable, and also includes an organic greens blend and probiotics for additional health benefits.''',
    image_url_1='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/Week1_Master_MatchaBagPhotoshoot_94b59f28-595a-4954-a92f-3a4a562239a4_1600x.png?v=1647277817',
    image_url_2='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/ProteinBagMockupMaster_MatchaLatte_Back_1_dee54623-d31e-4f47-b6bf-8a2b7dfadd1a_1600x.png?v=1653147496',
    image_url_3='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/NutritionFacts_Matcha_1_d8d493d3-6525-4037-812e-2e131c78f543_1600x.png?v=1653147496',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    viet_coffee_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Vietnamese Coffee (2.37lbs)',price=44.99, description='''Our Vietnamese Coffee drinks are made with an ultra-malty, medium roast robusta coffee bean imported from the Đắk Lắk province of Vietnam. \nWe captured its characteristic chocolate-y and earthy tones you can only get from using real Vietnamese robusta beans!''',
    image_url_1='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/VietCoffeeMock-Up3_2_fcfb4f03-82fa-40e2-bb10-763fef82400c_1000x1000.png?v=1633557827',
    image_url_2='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/ProteinBagMockUpMaster_Back_4417b10f-c121-44b4-96b6-c95e7e3e0844_1000x1000.png?v=1633557827',
    image_url_3='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/NutritionFacts-VietCoffee_f8c22cf5-102d-4335-a825-5de13addfff2_1000x1000.png?v=1633557827',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    taro_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Taro Milk Tea (2.37lbs)',price=44.99, description='''Our Taro Milk Tea drink uses real organic taro and purple sweet potato. They're both purple roots with unique flavor that you can find being used in many Asian delights across the world. \nWe source these ingredients from Taiwanese farms giving our drinks a very characteristic taro taste with a hint of the earthy purple sweet potato.''',
    image_url_1='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/Week1_Master_TaroBagPhotoshoot_2_c1bf4e0a-49d1-47c0-8249-aeeaa18ad4ae_1800x1800.png?v=1647277903',
    image_url_2='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/ProteinBagMockupMaster_TaroMilkTea_Back_1_2f2c549b-7b64-481e-85bd-5bee3a49a1f0_1800x1800.png?v=1647277903',
    image_url_3='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/NutritionFacts_Taro_1_ba5f12da-287d-4af0-9b0b-3cfab4acc9e3_1800x1800.png?v=1647277903',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    boba_pearls = Product(
        inventory=10, product_name='Boba Tea Protein - Tapioca Pearls (16 oz)',price=7.99, description='''Our tapioca pearls are made in the USA. \nTapioca pearls imported from overseas are often made with a significant amount of food additives to extend their shelf life by a couple of years. \nWe source our tapioca pearls from the USA so we can control what goes into them, giving you a more wholesome boba experience with 0 sugar. \nComes with 9 servings (450 grams). Can also serve 30g per serving for 15 servings.''',
    image_url_1='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/IMG_2285_1000x1000.png?v=1605457798',
    image_url_2='https://cdn.shopify.com/s/files/1/0424/5923/4471/products/Tapiocanutrition-US_1000x1000.png?v=1652802215',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    white_strada_blenderb = Product(
        inventory=10, product_name='BlenderBottle - Strada™ Insulated Stainless Steel (White)',price=7.99, description='''Our tapioca pearls are made in the USA. \nTapioca pearls imported from overseas are often made with a significant amount of food additives to extend their shelf life by a couple of years. \nWe source our tapioca pearls from the USA so we can control what goes into them, giving you a more wholesome boba experience with 0 sugar. \nComes with 9 servings (450 grams). Can also serve 30g per serving for 15 servings.''',
    image_url_1='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409076_ra.jpg',
    image_url_2='https://m.media-amazon.com/images/I/81K3D2b5z0L._AC_SX679_.jpg',
    image_url_3='https://m.media-amazon.com/images/I/81A3j60Ln2L._AC_SX679_.jpg',
    image_url_4='https://m.media-amazon.com/images/I/71u0dfbsy7L._AC_SX679_.jpg',
    image_url_5='https://m.media-amazon.com/images/I/81vbOZcEexL._AC_SX679_.jpg',
    image_url_6='https://www.amazon.com/b1576065-b896-4315-9e39-de3ac453eb5d',
    overall_rating=5,
        user_id=5,
    category_id=3,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    db.session.add(matcha_boba)
    db.session.add(viet_coffee_boba)
    db.session.add(taro_boba)
    db.session.add(boba_pearls)
    db.session.add(white_strada_blenderb)

    db.session.commit()



def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
