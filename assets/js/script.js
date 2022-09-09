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
            <footer>
                <button class="view-button button">view</button>
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

var renderModal = function (listing) {
  console.log(listing);
  var modalEL = $("<div>").addClass("modal").html(`
  
   <div class="modal ">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button  id="closeBtn" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <img src="${listing.media[0].url}" alt="">
    </section>
    <footer class="modal-card-foot">
    </footer>
  </div>
</div>
    `);

  //event del to save button
  $("#img-modal").append(modalEL);

  $(".view-button").on("click", function () {
    modal.classList.add("is-active");
    //save to local storage go here
  });
};
