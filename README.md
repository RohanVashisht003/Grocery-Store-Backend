# Grocery-Store-Backend
 A backend application for grocery store.

## Tech Stack: Node, Express, Mongo

## Setup The Project
1. Clone or Download the Repo.
2. Goto the Repo using Terminal. 
3. Run npm install, to install dependencies.
4. Run npm start to ignite the project.


## API endpoints
1. Api to fetch customers list. --> **[GET] localhost:8000/customer/list**
2. Api to fetch specific customer orders list. --> **[GET]  localhost:8000/customer/orderlist**  [Enter (*'email, phone or both'*) in postman to get the details of customer].
3. Api to fetch customer details with maximum orders in an year. -->  **[GET] localhost:8000/customer/max**
4. Api to create new customer. --> **[POST]  localhost:8000/customer/create** [Enter (*'email, phone, name'*) in postman to create new customer].
5. Api to create new product.  --> **[POST]  localhost:8000/product/add**   [Enter (*'category, info, price, quantity'*) in postman to create new product].
6. Api to update product price . --> **[POST]  localhost:8000/product/update** [Enter (*'item, price'*) in postman to update product price].
7. Api to create a new order.  -->  **[POST]  localhost:8000/order/new**  [Enter (*'phone or email, item1,item2,...,paymentInfo'*) in postman to create new order for customer].


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
    
