// favourites.js
// view saved favourites within "My favourites" from local storage
var loadFavourites = function () {
  console.log("Restoring array data from local storage");
  var myFavourites = JSON.parse(localStorage.getItem("favProp"));
  console.log(myFavourites);
  if (myFavourites === null) {
    myFavourites = [];
  }
  for (let i = 0; i < myFavourites.length; i++) {
    const favouriteListing = myFavourites[i];
    renderFavourite(favouriteListing);
  }
};

var renderFavourite = function (favouriteListing) {
  console.log("Restoring array data from local storage");
  console.log(favouriteListing);
  var listingEl = $("<div>").addClass("tile is-parent").html(`
  <div class="tile is-child box">
      <p class="title">${favouriteListing.propertyDetails.allPropertyTypes}</p>
      <div class="subtitle">
      <ul>
          <li>${favouriteListing.propertyDetails.displayableAddress}</li>
          <li>${favouriteListing.headline}</li>
      </ul>
      </div>
      <div class="content">
      <ul>
          <li>${favouriteListing.priceDetails.displayPrice}</li>
          <li>${favouriteListing.advertiser.name}</li>
          <img src=${favouriteListing.media[0].url}/>
      </ul>
      <footer>
          <button id="view-button" class="button">view</button>
          <button id="remove-button" class="button">remove</button>
      </footer>
      </div>
  </div>
  `);

  //event del to save button
  $("#fav-listings").append(listingEl);

  listingEl.on("click", function (e) {
    e.preventDefault();
    console.log(e);
    const target = e.target;
    if (target.matches("#view-button")) {
      renderImg(listing);
      viewModal();
      console.log("viewbutton is clicked");
    } else if (target.matches("#remove-button")) {
      removeFromFavourites(favouriteListing.id);
      listingEl.remove();
      // 5. delete the element off the page - to do so, you need to query select the container and use the .remove() method to remove it from DOM
    }
  });
};

//Remove a listing from favourites
var removeFromFavourites = function (listingIdToBeDeleted) {
  // 1. load the existing favs (existingFavs)
  var existingFavs = JSON.parse(localStorage.getItem("favProp"));
  // 2. create a newFavs array and initialize to an empty array []
  if (newFavs == null) {
    newFavs = [];
  }
  // 3. loop through existingFavs and if the fav.id does not match listingIdToBeDeleted -> then push the fav into the newFavs array
  for (let i = 0; i < newFavs; i++) {
    const newFavs = listingIdToBeDeleted[i];
    renderFavourite(newFavs);
  }
  // 4. at the end json parse the newFavs and set to local storage
  locateStorage.clear("");

  console.log("delete");
};

// var

//Clear all favourites - add a main button
// clearEl.addEventListener("click", function () {
//   localStorage.clear();
//   searchHistory = [];
//   renderSearchHistory();
// })

loadFavourites();
