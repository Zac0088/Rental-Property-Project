// Get properties from Domain API
var getListing = function (postcode) {
  var apiUrl =
    "https://api.domain.com.au/v1/listings/residential/_search?api_key=key_27fe49b09bbba4b6397ab211dd1c654d";
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      listingType: "Rent",
      pageNumber: 1,
      pageSize: 10,
      // "propertyTypes": [
      //     "House",
      //     "NewApartments"
      // ],
      minBedrooms: 1,
      minBathrooms: 1,
      minCarspaces: 1,

      // Search results from Google API location
      locations: [
        {
          state: "",
          region: "",
          area: "",
          suburb: "",
          postCode: postcode,
          includeSurroundingSuburbs: false,
        },
      ],
    }),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var result = data[i];
        renderListing(result.listing);
      }
    });
};

var renderListing = function (listing) {
  var listingEl = $("<div>").addClass("tile is-parent").html(`
    <div class="tile is-child box">
        <p class="title">${listing.propertyDetails.allPropertyTypes}</p>
        <div class="subtitle">
        <ul>
            <li>${listing.propertyDetails.displayableAddress}</li>
            <li>${listing.headline}</li>
        </ul>
        </div>
        <div class="content">
    <img  class="listingImg" src=${listing.media[0].url}/>
    </div>
        <ul>
            <li>Price - ${listing.priceDetails.displayPrice}</li>
            <li>Realtor - ${listing.advertiser.name}</li>
            <br>
        </ul>
        <footer>
            <button id="view-button" class="button">view</button>
            <button id="save-button" class="button">save</button>
        </footer>
        </div>
    </div>
  `);

  //event del to save button
  $("#listings-results").append(listingEl);

  listingEl.on("click", function (e) {
    e.preventDefault();
    console.log(e);
    const target = e.target;
    if (target.matches("#view-button")) {
      renderImg(listing);
      viewModal();
      console.log("viewbutton is clicked");
    } else if (target.matches("#save-button")) {
      // The save button is disabled if the listing is already saved to favourites
      $(target).attr("disabled", true);
      var myFavourites = JSON.parse(localStorage.getItem("favProp"));
      //If there are no favourite listings there will be an empty array
      if (myFavourites == null) {
        myFavourites = [];
      }
      var isAlreadyFavourited = false;

      for (var i = 0; i < myFavourites.length; i++) {
        var favouriteListing = myFavourites[i];
        if (favouriteListing.id === listing.id) {
          isAlreadyFavourited = true;
        }
      }
      if (!isAlreadyFavourited) {
        myFavourites.push(listing);
        localStorage.setItem("favProp", JSON.stringify(myFavourites));
      } else {
        console.log("Listing already in favourites", listing);
      }
    }
  });
};

let renderImg = function (listing) {
  console.log(listing);
  var modalEL = $("#img-modal").addClass("modal").html(`

  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Check out these shots!</p>
      <button  id="close-button" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <img  src=${listing.media[0].url}/>
      <img  src=${listing.media[1].url}/>
      <img  src=${listing.media[2].url}/>
      <img  src=${listing.media[3].url}/>
      <img  src=${listing.media[4].url}/>
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

var initialize = function () {
  var searchParams = new URL(document.location).searchParams;
  var postcode = searchParams.get("postcode");
  console.log(postcode);
  if (postcode) {
    getListing(postcode);
  }
};

$(document).ready(function () {
  initialize();
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

function navigateToListing(postcode) {
  document.location.assign("./listings.html?postcode=" + postcode);
}

window.navigateToListing = navigateToListing;
