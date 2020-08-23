# ShoppingCart
A simple application to shopping cart. 
## Setup
[downloading source code](https://github.com/firtanaelif/ShoppingCart/archive/master.zip) code as a zip archive.
Once downloaded, open the terminal in the project directory, and install dependencies with:
```
npm install
```
Then start with:
```
npm start
```
Then in second terminal:
```
cd frontend
```
```
npm install
```
```
npm start
```
The app should now be up and running at http://localhost:3000 

## About Project

# Case - Shopping Cart
Implement an e-commerce shopping cart class.
# Rules:
* Product has a title and price.
* Product belong to a category.
* Category may or may not have a parent category.
* Category has a title.
* Products are added to the Cart with quantity info.
* Campaigns exist for product price discounts.
* Campaigns are applicable to a product category.
* Campaign discount vary based on the number of products in the cart
* Coupons exist for cart discounts.
* Coupons have minimum cart amount constraint. If Cart amount is less than minimum, discount is not applied.
* Delivery Cost is Dynamic. Based on the number of deliveries and number of products.

# Cart
Implement a class that takes a cart and calculates the delivery cost.
* //sample creating a new category
 
* //products
 
* //Products can be added to a shopping cart with quantity

 
# Discounts
* //you can apply discounts to a category
* //discount rules can be 20% on a category if bought more than 3 items
* //another campaign rule 50% on a category if bought more than 5 items
* //another campaign rule 5 TL amount discount on a category if bought more than  items
 
* //Cart should apply the maximum amount of discount to the cart.

# Coupons 
* //You can also apply a coupon to a cart
* //Coupons have minimum amount. If the cart total is less than minimum amount, coupon is not applicable
* //Coupon for 100 TL min purchase amount for a 10% discount

 
* Campaign Discounts are applied first, Then Coupons.

# Delivery 

* To optimize our delivery Cost, we want to apply dynamic cargo pricing rules based on the number of deliveries and number of products in the cart.

* Formula is ( CostPerDelivery * NumberOfDeliveries ) + (CostPerProduct * NumberOfProducts) + Fixed Cost
* Fixed cost is 2.99 TL.
* Implement a class that takes a cart and calculates the delivery cost.

# Final

* Group Products by Category and Print the CategoryName, ProductName, Quantity, Unit Price, Total Price, Total Discount(coupon,campaign) applied

* cart.print()
 
* At the final line print total amount and the delivery cost.
