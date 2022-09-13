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

var searchParams = new URL(document.location).searchParams;
var postcode = searchParams.get("postcode");
console.log(postcode);
if (postcode) {
  getListing(postcode);
}

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
        <ul>
            <li>${listing.priceDetails.displayPrice}</li>
            <li>${listing.advertiser.name}</li>
            <img src=${listing.media[0].url}/>
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
    }
    else if (target.matches("#save-button")) {
      // Storage function to be integrated within the favourites html from the listings html
      // $ (".addFavourites" ).on("click", function () {

      $(this).attr('disabled', true);
      // var propIdAdd = $(this).closest("p").attr("id");
      var myFavouritesProp = JSON.parse(localStorage.getItem("favProp"));

      if (myFavouritesProp == null) {
        myFavouritesProp = [];
      }

      // if(myFavouriteProp != null) {
      //   for (var i = 0 < myFavouritesProp.length; i++) {
      //     if (propIdAdd == myFavouriteProp [i]) {
      //       alert("This property is already in your favourites")
      //       myFavouritesProp =[];
      //     }
      //   };
    }
    myFavouritesProp.push(listing);
    localStorage.setItem("favProp", JSON.stringify(myFavouritesProp));



    //function to remove from favourites - this needs to be added to the favourites page

    // (".removeFavourites" ).on("click", function () {
    // try {
    //   $(this).attr('disabled', true);
    //   var propIdAdd = $(this).closest("p").attr("id");
    //     myFavouritesProp=JSON.parse(localStorage.getItem("favProp"));


    //   if(myFavouriteProp != null) {
    //     for (var i = 0 < myFavouritesProp.length; i++) {
    //       if (propIdRemove== myFavouriteProp [i]) {
    //         alert("This property is removed")
    //          delete myFavouritesProp [i];
    //          localStorage.setItem("favProp", JSON.stringify(myFavouritesProp));
    //          myFavouriteProp[i] = [];
    //       }
    //     };
    //   }
    //   if(myFavouriteProp == null) {
    //     alert ("You have no favourite items");
    //   }
    // }
    // })  
  })

};

// view saved favourites within saved listing page from local storage
console.log("Restoring array data from local storage");
myFavouritesProp = JSON.parse(localStorage.getItem("favProp"));
var output = "<ul>";
if (myFavouriteProp! = null) {
  for var i = 0; i < data.properties.length; i++) {
    for (i = 0; i < myFavouriteProp.length; i++)
      if (data.properties[i].id == myFavouriteProp[i]) {
        output += data.properties[i] + " "
        // Need to complete this function using the same query as per listings page, i.e. Call render listing from local storage

      }
  }
}


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
      <img src=${listing.media[0].url}/>
      <img src=${listing.media[1].url}/>
      <img src=${listing.media[2].url}/>
      <img src=${listing.media[3].url}/>
      <img src=${listing.media[4].url}/>
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

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
