# Wk-3-Code-Challenge-Interactive-Shopping-List by Daniel Ombui

# Interactive Shopping List

This project is an interactive shopping list application that allows users to add items, mark items as purchased, and clear the list.

## Objective

Develop a webpage with a shopping list. Users can:

- Add items to the list
- Mark items as purchased
- Clear the list

## Features

### Core Features

1. **Array Management:**

   - A JavaScript array is used to store shopping list items.

2. **DOM Manipulation:**

   - An HTML structure with an input field for adding items.
   - A list container to display items.
   - Buttons for "Add" and "Clear List".
   - JavaScript dynamically adds new items to the list container.
   - Visually indicates purchased items (strikethrough text, different background color,that is lightgrey.).

3. **Event Handling:**
   - Event listeners capture user input and add items to the list.
   - Event listeners allow users to mark items as purchased.
   - An event listener removes all items from the list when the "Clear List" button is clicked.

### Bonus Features

1. Allow users to edit existing list items.
2. Implement persistence using local storage to save the list even after the page reloads.

## Usage

### HTML Structure

- An input field for adding items.
- A button to add items.
- An unordered list (`ul`) to display items.
- A button to clear the list.

### JavaScript Functionality

- An array `shoppingList` to store the items.
- Functions to add items (`addItem`), toggle the purchased status (`togglePurchased`), and clear the list (`clearList`).
- Event listeners for each button to handle the respective actions.
- The `renderList` function dynamically updates the list in the DOM.

## Author

Daniel Ombui
