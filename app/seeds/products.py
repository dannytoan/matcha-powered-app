from app.models import db, Product

# Adds a demo user, you can add other users here if you want
def seed_products():
    matcha_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Matcha Latte (2.37lbs)',price=44.99, description='''Our Matcha Latte drink includes hand-picked, shade-grown matcha directly from Nishio, Japan.
        \nOur matcha drink is unmatched by providing a bold taste, an antioxidant profile that is five times more abundant than any other known natural fruit or vegetable, and also includes an organic greens blend and probiotics for additional health benefits.''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661371254/MatchaShark%20Seed%20Data/Week1_Master_MatchaBagPhotoshoot_94b59f28-595a-4954-a92f-3a4a562239a4_1600x_rxq1sl.png',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661371297/MatchaShark%20Seed%20Data/Updated_ProteinBagMockupMaster_Matcha_Back_0ddb345d-e343-4550-a660-9a44c40a313a_1600x_ei8pdg.jpg',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661371325/MatchaShark%20Seed%20Data/Updated_USA_NutritionFacts_Matcha_d552727f-302d-4b53-9f9e-00c538e0ec81_1600x_r3xedz.jpg',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661371382/MatchaShark%20Seed%20Data/ProteinBagMockupMaster_MatchaLatte_1_fac238f7-c521-4f82-b454-11df84048abc_1800x1800_id5gnf.png',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    viet_coffee_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Vietnamese Coffee (2.37lbs)',price=44.99, description='''Our Vietnamese Coffee drinks are made with an ultra-malty, medium roast robusta coffee bean imported from the Đắk Lắk province of Vietnam. \nWe captured its characteristic chocolate-y and earthy tones you can only get from using real Vietnamese robusta beans!''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661372763/MatchaShark%20Seed%20Data/VietCoffeeMock-Up3_2_cecec192-aaf9-44aa-bf49-08dbf2166319_700x_pnkoxm.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661372818/MatchaShark%20Seed%20Data/ProteinBagMockUpMaster_Back_7dca444e-eee0-4749-af57-5af91643bc22_1000x1000_tslilh.webp',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661372815/MatchaShark%20Seed%20Data/Updated_USA_NutritionFacts_VietCoffee_74e0397b-c7af-43bb-a186-792eebd61109_1800x1800_yzupy7.webp',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661372812/MatchaShark%20Seed%20Data/VietCoffeeMockUpMaster_Front_1000x1000_e51c4d95-a8be-406e-ab7b-1ccd1097a569_1000x1000_jhqe5e.webp',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    taro_boba = Product(
        inventory=10, product_name='Boba Tea Protein - Taro Milk Tea (2.37lbs)',price=44.99, description='''Our Taro Milk Tea drink uses real organic taro and purple sweet potato. They're both purple roots with unique flavor that you can find being used in many Asian delights across the world. \nWe source these ingredients from Taiwanese farms giving our drinks a very characteristic taro taste with a hint of the earthy purple sweet potato.''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661372854/MatchaShark%20Seed%20Data/Week1_Master_TaroBagPhotoshoot_2_c1bf4e0a-49d1-47c0-8249-aeeaa18ad4ae_1800x1800_pvll1b.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661372857/MatchaShark%20Seed%20Data/ProteinBagMockupMaster_TaroMilkTea_Back_1_2f2c549b-7b64-481e-85bd-5bee3a49a1f0_1800x1800_fjliwd.webp',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661372860/MatchaShark%20Seed%20Data/Updated_USA_NutritionFacts_Taro_1800x1800_ppyntn.webp',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661372862/MatchaShark%20Seed%20Data/ProteinBagMockupMaster_TaroMilkTea_1_8f01d78f-ff66-48e4-bac7-63cd5695f435_1800x1800_eley4u.webp',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    boba_pearls = Product(
        inventory=10, product_name='Boba Tea Protein - Tapioca Pearls (16 oz)',price=7.99, description='''Our tapioca pearls are made in the USA. \nTapioca pearls imported from overseas are often made with a significant amount of food additives to extend their shelf life by a couple of years. \nWe source our tapioca pearls from the USA so we can control what goes into them, giving you a more wholesome boba experience with 0 sugar. \nComes with 9 servings (450 grams). Can also serve 30g per serving for 15 servings.''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661372896/MatchaShark%20Seed%20Data/IMG_2285_1000x1000_iuirnw.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661372897/MatchaShark%20Seed%20Data/Tapiocanutrition-US_700x_y297oi.webp',
    overall_rating=5,
    user_id=4,
    category_id=4,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    white_strada_blenderb = Product(
        inventory=10, product_name='BlenderBottle - Strada™ Insulated Stainless Steel (White)',price=25.99, description='''Our tapioca pearls are made in the USA. \nTapioca pearls imported from overseas are often made with a significant amount of food additives to extend their shelf life by a couple of years. \nWe source our tapioca pearls from the USA so we can control what goes into them, giving you a more wholesome boba experience with 0 sugar. \nComes with 9 servings (450 grams). Can also serve 30g per serving for 15 servings.''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661372978/MatchaShark%20Seed%20Data/6409076_ra_otfd7j.jpg',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661372972/MatchaShark%20Seed%20Data/81K3D2b5z0L._AC_SX679__ddcooq.jpg',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661372975/MatchaShark%20Seed%20Data/81A3j60Ln2L._AC_SX679__tojbed.jpg',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661372977/MatchaShark%20Seed%20Data/71u0dfbsy7L._AC_SX679__zt77tx.jpg',
    image_url_5='https://res.cloudinary.com/matchaprince/image/upload/v1661372979/MatchaShark%20Seed%20Data/81vbOZcEexL._AC_SX679__ygewoe.jpg',
    overall_rating=5,
        user_id=5,
    category_id=3,
    created_at= '2022-07-04',
    updated_at= '2022-07-04')

    studio_bra_green = Product(
        inventory=10, product_name='GYMSHARK - STUDIO SPORTS BRA',price=45.00, description='''WATCH ME FLOW

With soft, smooth and stretchy materials for that second skin feel, Studio fits flawlessly into your day. Bright colours and bold designs make sure you never fade into the crowd. And the perfect zero-distraction designs allow you to focus on your form in the studio, and your flow, wherever you go.

- Medium Support
- V shaped neckline
- Internal breathable moulded cups
- Strappy back design
- Gymshark logo to bust
- Bonded seams to underband for zero abrasion
- Soft buttery fabric
- High stretch fabric for freedom of movement
- 87% Nylon, 13% Elastane
- We've cut down our use of swing tags, so this product comes without one
- Model is 5’3” and wears a size XS
- SKU: B2A9Z-EBFX''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661373173/MatchaShark%20Seed%20Data/StudioSportsBraAppleGreen-B2A9Z-EBFX.A_885x_kbbntl.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661373197/MatchaShark%20Seed%20Data/StudioSportsBraAppleGreen-B2A9Z-EBFX.B_290x_lvhpxs.webp',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661373199/MatchaShark%20Seed%20Data/StudioSportsBraAppleGreen-B2A9Z-EBFX.C_290x_ybr04r.webp',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661373200/MatchaShark%20Seed%20Data/StudioSportsBraAppleGreen-B2A9Z-EBFX.A1_290x_ftid2e.webp',
    image_url_5='https://res.cloudinary.com/matchaprince/image/upload/v1661373202/MatchaShark%20Seed%20Data/StudioSportsBraAppleGreen-B2A9Z-EBFX.D1_438x_n6qndl.webp',
    image_url_6='https://res.cloudinary.com/matchaprince/image/upload/v1661373204/MatchaShark%20Seed%20Data/StudioSportsBraAppleGreen-B2A9Z-EBFX.D2_438x_jm87m7.webp',
    overall_rating=5,
        user_id=6,
    category_id=1,
    created_at= '2022-08-01',
    updated_at= '2022-08-01')

    studio_shorts_green = Product(
        inventory=10, product_name='GYMSHARK - STUDIO SHORTS',price=45.00, description='''WATCH ME FLOW

With soft, smooth and stretchy materials for that second skin feel, Studio fits flawlessly into your day. Bright colours and bold designs make sure you never fade into the crowd. And the perfect zero-distraction designs allow you to focus on your form in the studio, and your flow, wherever you go.

- High waisted coverage and support
- 4" inseam based off size M
- Shaped waistband
- Bonded seams for zero abrasion
- High stretch fabric for freedom of movement
- Soft buttery fabric
- Gymshark logo to left hand side below waistband
- 87% Nylon, 13% Elastane
- We've cut down our use of swing tags, so this product comes without one
- Model is 5’3” and wears a size XS
- SKU: B1A9N-EBFX''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661373221/MatchaShark%20Seed%20Data/StudioWShortsAppleGreen-B1A9N-EBFX.A_885x_vwit18.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661373223/MatchaShark%20Seed%20Data/StudioWShortsAppleGreen-B1A9N-EBFX.B_290x_j65qya.webp',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661373225/MatchaShark%20Seed%20Data/StudioWShortsAppleGreen-B1A9N-EBFX.C_290x_ybxoqf.webp',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661373227/MatchaShark%20Seed%20Data/StudioWShortsAppleGreen-B1A9N-EBFX.D1_290x_svuu5y.webp',
    image_url_5='https://res.cloudinary.com/matchaprince/image/upload/v1661373228/MatchaShark%20Seed%20Data/StudioWShortsAppleGreen-B1A9N-EBFX.D2_438x_u6wgdd.webp',
    image_url_6='https://res.cloudinary.com/matchaprince/image/upload/v1661373230/MatchaShark%20Seed%20Data/StudioWShortsAppleGreen-B1A9N-EBFX.D3_438x_jslk4a.webp',
    overall_rating=4,
        user_id=6,
    category_id=1,
    created_at= '2022-08-01',
    updated_at= '2022-08-01')

    studio_bra_pink = Product(
        inventory=10, product_name='GYMSHARK - STUDIO SPORTS BRA',price=45.00, description='''WATCH ME FLOW

With soft, smooth and stretchy materials for that second skin feel, Studio fits flawlessly into your day. Bright colours and bold designs make sure you never fade into the crowd. And the perfect zero-distraction designs allow you to focus on your form in the studio, and your flow, wherever you go.

- High waisted coverage and support
- 4" inseam based off size M
- Shaped waistband
- Bonded seams for zero abrasion
- High stretch fabric for freedom of movement
- Soft buttery fabric
- Gymshark logo to left hand side below waistband
- 87% Nylon, 13% Elastane
- We've cut down our use of swing tags, so this product comes without one
- Model is 5’3” and wears a size XS
- SKU: B1A9N-EBFX''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661373245/MatchaShark%20Seed%20Data/StudioSportsBraHibiscusPink-B2A9Z-KBB9.A_885x_trcxsq.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661373248/MatchaShark%20Seed%20Data/StudioSportsBraHibiscusPink-B2A9Z-KBB9.B_290x_bivdil.webp',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661373250/MatchaShark%20Seed%20Data/StudioSportsBraHibiscusPink-B2A9Z-KBB9.C_290x_qqfs0x.webp',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661373252/MatchaShark%20Seed%20Data/StudioSportsBraHibiscusPink-B2A9Z-KBB9.A1_290x_xdzdya.webp',
    image_url_5='https://res.cloudinary.com/matchaprince/image/upload/v1661373253/MatchaShark%20Seed%20Data/StudioSportsBraHibiscusPink-B2A9Z-KBB9.D1_438x_ssjq9z.webp',
    image_url_6='https://res.cloudinary.com/matchaprince/image/upload/v1661373255/MatchaShark%20Seed%20Data/StudioSportsBraHibiscusPink-B2A9Z-KBB9.D2_438x_hlbwof.webp',
    overall_rating=5,
        user_id=6,
    category_id=1,
    created_at= '2022-08-01',
    updated_at= '2022-08-01')

    studio_leggings_pink = Product(
        inventory=10, product_name='GYMSHARK - STUDIO 7/8 LEGGINGS',price=60.00, description='''WATCH ME FLOW

With soft, smooth and stretchy materials for that second skin feel, Studio fits flawlessly into your day. Bright colours and bold designs make sure you never fade into the crowd. And the perfect zero-distraction designs allow you to focus on your form in the studio, and your flow, wherever you go.

- High waisted coverage and support
- Shaped waistband
- 7/8 length
- Bonded seams for zero abrasion
- High stretch fabric for freedom of movement
- Soft, buttery fabric
- Gymshark logo to left hand side below waistband
- 87% Nylon, 13% Elastane
- We've cut down our use of swing tags, so this product comes without one
- Model is 5’3” and wears a size XS
- SKU: B2A9Y-KBB9''',
    image_url_1='https://res.cloudinary.com/matchaprince/image/upload/v1661373266/MatchaShark%20Seed%20Data/StudioLeggingsHibiscusPink-B2A9Y-KBB9.A_885x_audlrl.webp',
    image_url_2='https://res.cloudinary.com/matchaprince/image/upload/v1661373269/MatchaShark%20Seed%20Data/StudioLeggingsHibiscusPink-B2A9Y-KBB9.B_290x_aarbog.webp',
    image_url_3='https://res.cloudinary.com/matchaprince/image/upload/v1661373271/MatchaShark%20Seed%20Data/StudioLeggingsHibiscusPink-B2A9Y-KBB9.C_290x_dww86q.webp',
    image_url_4='https://res.cloudinary.com/matchaprince/image/upload/v1661373273/MatchaShark%20Seed%20Data/StudioLeggingsHibiscusPink-B2A9Y-KBB9.D1_438x_d3gi4t.webp',
    image_url_5='https://res.cloudinary.com/matchaprince/image/upload/v1661373275/MatchaShark%20Seed%20Data/StudioLeggingsHibiscusPink-B2A9Y-KBB9.D3_885x_mhlrxp.webp',
    image_url_6='https://res.cloudinary.com/matchaprince/image/upload/v1661373276/MatchaShark%20Seed%20Data/StudioLeggingsHibiscusPink-B2A9Y-KBB9.D2_438x_jr99zp.webp',
    overall_rating=5,
        user_id=6,
    category_id=1,
    created_at= '2022-08-01',
    updated_at= '2022-08-01')











    db.session.add(matcha_boba)
    db.session.add(viet_coffee_boba)
    db.session.add(taro_boba)
    db.session.add(boba_pearls)
    db.session.add(white_strada_blenderb)
    db.session.add(studio_bra_green)
    db.session.add(studio_shorts_green)
    db.session.add(studio_bra_pink)
    db.session.add(studio_leggings_pink)


    db.session.commit()



def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
