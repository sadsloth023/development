# Development

### Link to Deployed Website
Deployed website: https://sadsloth023.github.io/development/


### Goal and Value of the Application
The goal of this application is to be able to purchase play time for a dog! Growing up, I've always wanted a dog but was never allowed to have one because my family didn't want one. Moreover, now that I'm older and never have any free time, adopting a dog isn't feasible. There are probably many others out there like me: individuals who wish they had a dog but can't feasibly adopt one. As a result, the purpose of this website is to act as a marketplace for people to purchase play time with a dog! Each dog added to the cart is 10 minutes worth of play time.

### Usability Principles Considered
I decided to include all of the filtering and sorting buttons on the left side of the screen as this is typically what I've seen from several other marketplaces (for example, Amazon), thus users would be familiar with this convention. Moreover, I included what the user was filtering/sorting on at the top of the page above all of the filtering and sorting buttons so that it would be abundantly clear to the users what cards were being displayed. The cart is at the very bottom of the left hand panel intentionally, as I've noticed from several retail sites that the carts are usually hidden (either you have to click into a different webpage or you have to hover over an icon). This may in part be due to the fact that if people can see how many items are in their cart and what the total cost is, they will be less inclined to add more items to their cart due to the fact that they may feel guilty for having a high total cost. 

In terms of the actual dog cards themselves, I formatted them so that all of the information that users can sort/filter them by were displayed clearly on the cards. Organization wise, I wanted to keep the text seperate from the photos (as opposed to overlaid on the photos) to make it super clear. Because everything on this website fits on one webpage, I decided to put the remove item on each dog card itself as opposed to in the aggregator (the cart) as spacially this fit better. I did not think this would affect usability since again, the cart and dog items are on the same page. 


### Organization of Components
For this project there are 2 componenets: one for each dog item and one for the cart aggregator. Each dog item includes the following data values/elements: name, breed, size, gender, cost, an image, an add buttom, and a remove button. To render each of the dog items on the page, a map function is used. The cart aggregator is only used once on the page, and this component is a global variable. There are 2 main components to this: the total price and the cart. Moreover, dogData is also used in this aggregator componenet to render each dog's name. Both of these components are in the "components" folder.

These components are both used in App.js, the main file for this website. This is where all of the filtering, sorting, and aggregating functions are.


### How Data is Passed Down Through Components
Data is passed down through components via props. For DogItem.js, each dog item is passed through this component and then rendered in App.js. This allows us to render multiple dogs with different data in the same way/format (hence why all of the dog items look the same but contain different data). For Cart.js, although this is only used once, this component stores how the aggregator is formatted. Although the contents of the cart is updated in App.js, this is passed into a Cart item. 

### How the User Triggers State Changes
The user triggers state changes when they decide to press any of the buttons on the website, namely:
1. Sorting: If a user presses on one of the three sorting buttons (High to Low, Low to High, Default) this will change the state of the sorting type which in turn changes how we sort the displayed dog items. "sortedFilteredData" is a variable that changes based on what the sortType is,and sortType changes with each button.
2. Filtering: Filtering works in a similar manner to sorting; there are 2 possible attributes that a user can filter by: size and gender. I used 2 different state variables for each of these. When a user presses on either "Male" or "Female," this changes the genderType state. When a user presses on either "Small," "Medium," or "Large," this changes the sizeType state. This in turn changes the way that the data is filtered through using the matchType function. When a user presses "Reset All Filters," this changes both the sizeType and genderType state to "All," which does not filter out anything.
3. Cart modification: When a user adds an item to their cart, this changes the cart component. The code first checks if the item is already in the cart. If it is, then it increases the quantity by 1 (and increases the total price by how much that item costs). If the item is not in the cart, then it adds the item to the cart and adds a quantity value of 1 (and increases the total price by how much that item costs).

