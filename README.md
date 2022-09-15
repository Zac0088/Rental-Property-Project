# Renters - Always walking around like they rent the place (Rental Property Project)


## Project Proposal - Rental property search project

A rental property search application is created to allow the user to search for rental property listings in any suburb/city (Australia). The user is able to view the listings in the selected suburb/city and is able to select to save a listing and modify these from the favorites storage.  

This app runs in the browser and features dynamically updated HTML, JavaScript, Bulma, CSS, JQuery, Server-side APIs - Domain and Google Place Autocomplete. It is a clean and polished, responsive user interface that adapts to multiple screen sizes and responds to user interface.


## User Story
As a renter I want to be able to search for rental properties in any suburb/city (Australia)
I WANT to view the available properties
SO THAT I can save the properties to my favorites to view later 


## Deployed Webpage

Link to deployed website: https://zac0088.github.io/Rental-Property-Project/

Link to Github: https://github.com/Zac0088/Rental-Property-Project.git


## Acceptance criteria

GIVEN the user is presented with a webpage and with functionality of the page. 

THEN the user is presented with a search function box.

WHEN a search query (location) is entered (using the auto complete function), 

<img width="1315" alt="main-page" src="https://user-images.githubusercontent.com/109460560/190347538-e77e22c6-f10d-4952-b7f1-d05965efe14f.png">


THEN the user presented with property listings in the suburb/ city (Australia)- with a description of the property, images, pricing and realtor for the listing.

<img width="1320" alt="search" src="https://user-images.githubusercontent.com/109460560/190347595-6db1aff8-9c86-435c-b83c-a6a721d1f953.png">


WHEN the user selects a listing, a modal will pop up providing further details of the selected listing - further images of the property.

<img width="1311" alt="modal" src="https://user-images.githubusercontent.com/109460560/190347645-b8ce9c60-1596-40bd-803a-7b73647b8bb9.png">

WHEN the user clicks on the close button,

THEN the webpage returns to the listings search page.

WHEN the user click on the ‘Save’ function to add to favourites,

THEN the selected listings will be added to the 'My Favourites' page. 

<img width="1326" alt="save-function" src="https://user-images.githubusercontent.com/109460560/190347770-e4187520-3ac6-45ff-9fd8-4ecd5eddab14.png">

WHEN the user selects 'My Favourites' page, 

THEN the user will be presented with the listings they have selected to 'Save' whilst browsing.

THEN the user will be able to view the listings, and

THEN the user will also have the option to remove the listings they have saved.

<img width="1325" alt="favourites" src="https://user-images.githubusercontent.com/109460560/190347856-911d09d1-ed7e-40eb-bfe9-49822a849bab.png">


## Development Technologies Used 

  - CSS Framework - Bulma
  - Use of modals
  - JQuery
  - Two Server side APIs - (1) Domain and (2) Google Place - Autocomplete
  - Interactive - respond to user input - search, save and query function
  - Responsive - update searches, mobile friendly
  - Use client-side storage to store persistent data - save function


## Direction for Future Development 


  - Functioning storage button - to clear data from local storage
  - Search for properties "Around Me" function
  - Google street view
  - Add more listings to the page as the user scrolls down the page


 ## Referencing


   - Bulma: https://bulma.io
   - Domain API: https://developer.domain.com.au/docs/v1/apis/pkg_agents_listings/references/listings_detailedresidentialsearch
   - Google Place - Autocomplete: https://developers.google.com/maps/documentation/javascript/place-autocomplete 

  ## Authors

    - Alex Mastroianni
    - Bhavika Mevada
    - Zachary Smart

