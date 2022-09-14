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
      renderImg(favouriteListing);
      viewModal();
      console.log("viewbutton is clicked");
    } else if (target.matches("#remove-button")) {
      listingEl.remove();
      // 5. delete the element off the page - to do so, you need to query select the container and use the .remove() method to remove it from DOM
    }
  });
};

let renderImg = function (favouriteListing) {
  var modalEL = $("#img-modal").addClass("modal").html(`

  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Check out these shots!</p>
      <button  id="close-button" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <img  src=${favouriteListing.media[0].url}/>
      <img  src=${favouriteListing.media[1].url}/>
      <img  src=${favouriteListing.media[2].url}/>
      <img  src=${favouriteListing.media[3].url}/>
    </section>
    <footer class="modal-card-foot">
    </footer>
  </div>
  </div> 
  `);

  //event del to save button
  $("#img-modal").append(modalEL);

  modalEL.on("click", function (e) {
    console.log(e);
    const target = e.target;
    if (target.matches("#close-button")) {
      closeModal();
      console.log("close button is clicked");
    }
  });
};

let viewModal = function () {
  $("#img-modal").addClass("is-active");
};

let closeModal = function () {
  $("#img-modal").removeClass("is-active");
};

loadFavourites();
