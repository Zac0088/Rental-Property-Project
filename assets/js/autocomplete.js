
let autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      componentRestrictions: { 'country': ['AU'] },
      fields: ['place_id', 'geometry', 'name', 'address_components']
    });
  // autocomplete.addListener('place_changed', onPlaceChanged);
}

window.initAutocomplete = initAutocomplete;

function onPlaceChanged() {
  var place = autocomplete.getPlace();
  var postcode = getPostcode(place);
  window.navigateToListing(postcode);
}

document.getElementById("searchsubmit").addEventListener("click", function () {
  onPlaceChanged()
})

function getPostcode(place) {
  let postcode = "";
  for (const component of place.address_components) {
    const componentType = component.types[0];
    if (componentType == "postal_code") {
      postcode = component.short_name
    }
  }
  return postcode
}
