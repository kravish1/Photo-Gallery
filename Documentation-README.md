Photo Gallery App

Author : Karthik Ravishanker

App Features
- Displays photos in a grid view on the initial app load

- Supports a fullscreen mode
    - When the user clicks on an image, it will show the entire image fullscreen as a Modal
    - The Modal has the following items
        - Pagination controls, Previous (<) / Next (>) to navigate back and forth between the images
        - The pagination is accessible both using mouse clicks and keyboard arrow <- -> keys
        - Label showing the current photo number and the total photo count eg."Showing 2 of 30"
        - A "close" button to close the Modal and return to the grid view
    - The Modal can be closed using the following ways
        - By clicking the close button
        - By clicking anywhere in the background, other than the currently displayed photo
        - By clicking the 'esc' key on the keyboard

- Supports different viewports 
    - iPad Pro
    - iPad
    - iPhone X
    - iPhone 6/7/8 Plus

- Queries an API for a set of photos
    - Sample data provided via the photos.json file is accessed using the fetch API mimicing a Rest endpoint

- Nice to have Features
    - Infinite Scrolling for the photos initially displayed on the grid 
        - Attach an event listener to the 'scroll' event 
        - Load photos as the user scrolls down the page based on the viewport
        - This keeps the initial load light and optimizes the app memory by quering the server on a need basis
    
    - Add a Thumbnail bar at the end of the Modal displaying photo thumbnails
        - Makes the UI more slick
        - Improves the usability of the app

    - Add a slide show feature for the users to view the photos
        - Enriched user interaction

Technical Details
    - Vanilla JS ES6
        - ES6 Classes
        - ES6 Modules
        - ES6 Array methods (reduce / filter)

Design Details

    The Photo Gallery App has been designed / implemented using the MVC framework philosofy to facilitate better structuring / debugging / maintainability and reusability.

    index.html — contains our templates and initial module loading.
        - Has all the initial structure for the grid / modal
        - Uses HTML5 scemantic elements

    style.css - Styling for the App
        - Has generic styles
        - Class based styles
        - Media queries

    app.js — our main entry point for the app 
        - Executes async function fetchData that gets data using the fetch API and returns the Promise
        - The Promise, if resolved successfully, populated the application state with the photos
        - Instance of the Modal (store.js) and View (view.js) is passed on to create a Controller instance (controller.js)

    store.js - stores the entire state of the application
        - photos - photos list
        - index - index to keep track of the current photo item
        - CRUD methods to modify the application state

    view.js - contains all the DOM related code, querying elements from the DOM, event Listeners
        - Responsible only for rendering the UI
        - Queries the DOM for all the UI elements based on classes 
        - Adds event listeners for the various 'click','keyup' events
        - All the state modifying handlers are bound to a corresponding Controller method
        - This ensures the separation of concerns and improves debugging and maintenablity

    controller.js - acts as a bridge between the view / modal
        - Mediates between the View / Modal
        - Invokes all the View <=> Controller <=> Modal bindings during instanciation
        - If there is a change in the UI, it calls the corresponding View <=> Controller method binding,which inturn calls the method to update the state by passing a callbak from the view