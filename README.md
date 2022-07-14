<h1 align="center">MatchaShark</h1>

<p align="center">MatchaShark is a fullstack e-commerce marketplace application with a consumer fitness theme and Amazon/Etsy-like capabilities. Users are able to post their own product listings as well as buy products made by other users within the community.</p>


**Live Link**: https://matchashark.herokuapp.com/
<br>

## Technologies Used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)


## Building the App
1. Clone the main repository

   ```bash
   git clone https://github.com/dannytoan/matcha-shark-app
   ```

2. Install the dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
   
<br>

### Application Architecture

MatchaShark is built with Flask on the backend, React and Redux on the frontend, and PostgresSQL as the RDBMS.

<br>

## Mininum Viable Features
### Products
![image](https://user-images.githubusercontent.com/96567728/178895899-5987d77b-996a-4dc0-a170-6353d98c53ab.png)
### Product Detail
![image](https://user-images.githubusercontent.com/96567728/178896314-4011f599-9241-4247-9af2-793da3889937.png)
### Edit Product Listing Details
![image](https://user-images.githubusercontent.com/96567728/178897144-e0a5d41a-078d-4113-a4c7-f424680f480a.png)
### Product Reviews
![image](https://user-images.githubusercontent.com/96567728/178896616-1c03d57e-cfa4-476f-9800-a70eeb5b953e.png)
### Edit Product Review
![image](https://user-images.githubusercontent.com/96567728/178896951-2ad4eb7c-5486-46b9-85ef-da7b87d44f30.png)


## Bonus/Future Features
* Cart (Coming soon)
* Order History (Coming Soon)

### Contact
![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) https://www.linkedin.com/in/dannytoan


![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) https://github.com/dannytoan
