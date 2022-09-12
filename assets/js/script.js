
let autocomplete;
function initAutocomplete() {
  autocomplete= new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      componentRestrictions: {'country' : ['AU']},
      fields: ['place_id', 'geometry', 'name']
    });
  autocomplete.addEventListener('on_submit', onPlaceChanged);
}
function onSubmit() {
var place = autocomplete.getPlace();
if (!place.geometry){
  document.getElementById('autocomplete').placeholder =
  'Search Here';
}else{
  document.getElementById('details').innerHTML = place.name;
}
}





