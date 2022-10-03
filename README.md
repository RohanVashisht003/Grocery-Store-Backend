# Grocery-Store-Backend
 A backend application for grocery store.

## Tech Stack: Node, Express, Mongo

## Setup The Project
1. Clone or Download the Repo.
2. Goto the Repo using Terminal. 
3. Run npm install, to install dependencies.
4. Run npm start to ignite the project.


## API endpoints
1. Api to register customer. --> **[POST] localhost:9000/customer/register** [Enter (*'email, phone_no, address, name'*) in postman to register customer]
2. Api to upload customer photo. --> **[POST]  localhost:9000/customer/:id/upload**  [Attach image of customer, "pic"].
3. Api to register admin. -->  **[POST] localhost:9000/admin/register** [Enter (*'name, email, password'*) in postman to register admin]
4. Api to create session for admin. --> **[POST]  localhost:9000/admin/login** [Enter (*'email, password'*) in postman to login admin,(it will generate a token for further use)].
5. Api to get data of particular customer.  --> **[GET]  localhost:9000/admin/:id/check**   [Enter (*' bearer token '*) in postman to authenticate].
6. Api to get data of customer(s) on date .  --> **[GET]  localhost:9000/admin/onDate**  [Enter (*' bearer token '*) in postman to authenticate].


## Screenshots of working application

1. Registering customer
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/customer%20register.jpg?raw=true)
   
2. Upload customer photo
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/customer-img.jpg?raw=true)
   
3. Register admin
    ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/create%20admin.jpg?raw=true)
    
4. Create session for admin
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/login%20admin.jpg?raw=true)
   
5. Get data of particular customer
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/check%20particular%20customer.jpg?raw=true)
   
6. Get data of customer(s) on date
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/ondate.jpg?raw=true)
   

    
