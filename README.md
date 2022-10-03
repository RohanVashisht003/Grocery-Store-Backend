# Grocery-Store-Backend
 A backend application for grocery store.

## Tech Stack: Node, Express, Mongo

## Setup The Project
1. Clone or Download the Repo.
2. Goto the Repo using Terminal. 
3. Run npm install, to install dependencies.
4. Run npm start to ignite the project.


## API endpoints
1. Api to register customers list. --> **[POST] localhost:9000/customer/register** [Enter (*'email, phone_no, address, name'*) in postman to register customer]
2. Api to upload customer photo. --> **[POST]  localhost:9000/customer/:id/upload**  [Attach image of customer "pic"].
3. Api to register admin. -->  **[POST] localhost:9000/admin/register** [Enter (*'name, email, password'*) in postman to register admin]
4. Api to create session for admin. --> **[POST]  localhost:9000/admin/login** [Enter (*'email, password'*) in postman to login admin,(it will generate a token for further use)].
5. Api to get data of particular customer.  --> **[GET]  localhost:9000/admin/:id/check**   [Enter (*' bearer token '*) in postman to authenticate].
6. Api to get data of customer(s) on date .  --> **[GET]  localhost:9000/admin/onDate**  [Enter (*' bearer token '*) in postman to authenticate].


## Screenshots of working application

1. Fetching customers list
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/fetch%20customer.jpg?raw=true)
   
2. Fetching specific customer orders list
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/specific.jpg?raw=true)
   
3. Fetching customer details with maximum orders in an year
    ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/maxorders.jpg?raw=true)
    
4. Creating new customer
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/Screenshot%202022-09-07%20202103.jpg?raw=true)
   
5. Creating new product
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/product%20add.jpg?raw=true)
   
6. Updating product price
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/product%20update.jpg?raw=true)
   
7. Creating a new order 
   ![Semantic description of image](https://github.com/RohanVashisht003/All-Images/blob/main/neworder.jpg?raw=true)
    
