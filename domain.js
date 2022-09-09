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
      minBedrooms: 3,
      minBathrooms: 2,
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
      // showListing(data);
      //   showImage(data)

      //   $("#image").text("Property Image " + data[1].listing.media[1].url);

      //   $("#Location").text(
      //     "Location " + data[1].listing.propertyDetails.displayableAddress
      //   );

      //   $("#Description").text(
      //     "Description " + data[1].listing.propertyDetails.displayableAddress
      //   );

      //   $("#Price").text(
      //     "Price " + data[1].listing.propertyDetails.displayableAddress
      //   );

      //   $("#Seller").text("Seller " + data[1].listing.advertiser.name);
      //   console.log(data[1]);

      for (var i = 0; i < data.length; i++) {
        var result = data[i];
        renderListing(result.listing);
      }
    });
  //   } else {
  //     alert("Error: " + response.statusText);
  //   }
  // });
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
  
        <article id="viewListing1" class="tile is-child box">
            <p class="title">Listing 1</p>
            <div class="subtitle">
            <ul>
                <li>Location</li>
                <li>${listing.headline}</li>
            </ul>
            </div>
            <div class="content">
            <ul>
                <li>Location</li>
                <li>Description</li>
                <li>Price</li>
                <li>Seller</li>
            </ul>
            <footer>
                <button class="button">view</button>
                <button id="saveListing1" class="button saveBtn">save</button>
            </footer>
            </div>
        </article>
    `);

  console.log(listingEl);

  //event del to save button
  $("#listings-results").append(listingEl);

  listingEl.on("click", function () {
    console.log("CLICK", listing);
    //save to local storage go here
  });
};

// save lsiting to local storgage,
//

// Make mobile copat
// Navbar - change my listing to favourites
// home page search added to url qerey to pass through to search page - on submit button
// search page location info rendered from the URL

// search page - fix UI padding and background image,
// search page - keep grid layout by adding flexbox to generated listing elements
// search page - add event delegration to add save button function - save button puts lisiting into local stoarge
// search page - add a submit button to the search to add to URL query
// search page - make all the tiles render dymamicly from JS
// search page - add css styling to keep grid
// search page - add a space from an image
// search page - add a img attr and use the url from API to input src

// My favs - render from local storage - see save button
// My favs - copy paste info from search page
