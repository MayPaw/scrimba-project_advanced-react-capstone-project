# Scrimba Project: Advanced React Capstone Project

This repository contains a project from Scrimba's "The Frontend Developer Career Path" course - Advanced React Capstone Project. As the name suggests, the project summarizes the Advanced React Module, taught by Bob Ziroll.
To see the project, please visit: https://maypaw.github.io/scrimba-project_advanced-react-capstone-project/

The app was done as part of the course, not as a solo project. So, to learn even more and do something more creative, I decided to make some changes. Even though the project doesn't significantly benefit from Typescript or Tailwind CSS, I chose to include them for practice. Below I list "requirements" - parts of the project done with the tutor and my ideas for functionality.

## Requirements
The goal of the project was to create a SPA that would imitate an online picture shop, with React and React Router. The application should contain two routes - "homepage" route with photos and "cart" route. The links to both routes should be available on the header.

Requirements for the "homepage":
- it should contain photos fetched from given API, 
- the user can add a photo to favorites and/or put it to the cart

Requirements for the "cart"
- it should display price of each item and total price
- the user can delete items from the cart
- clicking "Place order" button displays a message for user in the console and clears the cart

## My ideas
Implemented:
- after "placing order", display message for the user on the screen
- display loading spinner when the photos are being fetched

For further development:
- display the number of items added to cart on the header's cart icon
