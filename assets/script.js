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
  console.log(listing);
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
            </ul>
             <img class="display-image is-justify-content-end is-flex" src="${listing.media[0].url}" alt="">
            <footer>
                <button class="button">view</button>
                <button id="saveListing1" class="button saveBtn">save</button>
            </footer>
            </div>
        </div>
    `);

  console.log(listingEl);

  //event del to save button
  $("#listings-results").append(listingEl);

  listingEl.on("click", function () {
    console.log("CLICK", listing);
    //save to local storage go here
  });
};

var viewModal = document.querySelector(".view");
var modal = document.querySelector(".modal");
var closeModal = document.querySelector("#closeBtn");
var saveBtn = document.querySelector(".saveBtn");

// viewModal.addEventListener("click", () => {
//   modal.classList.add("is-active");
// });

closeModal.addEventListener("click", function () {
  modal.classList.remove("is-active");
});

$("#viewListing1").on("click", function () {
  modal.classList.add("is-active");
});
$("#viewListing2").on("click", function () {
  modal.classList.add("is-active");
});
$("#viewListing3").on("click", function () {
  modal.classList.add("is-active");
});
$("#viewListing4").on("click", function () {
  modal.classList.add("is-active");
});

$("#viewListing5").on("click", function () {
  modal.classList.add("is-active");
});

$("#viewListing6").on("click", function () {
  modal.classList.add("is-active");
});
