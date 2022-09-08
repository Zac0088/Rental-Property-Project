// Get properties from Domain API
fetch("https://api.domain.com.au/v1/listings/residential/_search?api_key=key_27fe49b09bbba4b6397ab211dd1c654d", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "listingType": "Rent",
        // "propertyTypes": [
        //     "House",
        //     "NewApartments"
        // ],
        "minBedrooms": 3,
        "minBathrooms": 2,
        "minCarspaces": 1,

        // Search results from Google API location
        "locations": [
            {
                "state": "",
                "region": "",
                "area": "",
                "suburb": "",
                "postCode": "",
                "includeSurroundingSuburbs": false
            }
        ]
    })
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })

console.log(data)

let showData = function (data) {
    $("#Location").text("Location" + data.listing.propertyDetails.displayableAddress)
}

showData()

console.log(data)


// data.listing.propertyDetails.displayableAddress