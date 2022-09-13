function navigateToListing(postcode) {
    document.location.assign("./Pages/listings.html?postcode=" + postcode)
}

window.navigateToListing = navigateToListing;