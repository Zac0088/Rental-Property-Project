// function initMap() {
//   var input = document.getElementById('#searchTextField');
//   var autocomplete = new google.maps.places.Autocomplete(input);
//   autocomplete.addListener('place_changed', function() {
//     var place = autocomplete.getPlace();
//     document.getElementById("address").value = JSON.stringify(place.address_components);
//   });
// }
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



  var viewModal = document.querySelector(".view");
var modal = document.querySelector(".modal");
var closeModal = document.querySelector("#closeBtn");
var saveBtn = document.querySelector(".saveBtn");
// var submitBtnEl = document.querySelector(".submitBtn");
// var userInputEl = document.querySelector(".userInput");

// viewModal.addEventListener("click", () => {
//   modal.classList.add("is-active");
// });

// console.log(submitBtnEl);


// closeModal.addEventListener("click", function () {
//   modal.classList.remove("is-active");
// });

// $("#viewListing1").on("click", function () {
//   modal.classList.add("is-active");
// });
// $("#viewListing2").on("click", function () {
//   modal.classList.add("is-active");
// });
// $("#viewListing3").on("click", function () {
//   modal.classList.add("is-active");
// });
// $("#viewListing4").on("click", function () {
//   modal.classList.add("is-active");
// });

// $("#viewListing5").on("click", function () {
//   modal.classList.add("is-active");
// });

// $("#viewListing6").on("click", function () {
//   modal.classList.add("is-active");
// });




// function handleSearchFormSubmit(event) {
//   event.preventDefault();
//   console.log("Inside event handler");
//   var searchInputVal = userInputEl.value.trim();

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './Pages/listings.html?q=' + searchInputVal;

//   location.assign(queryString);
// }


// submitBtnEl.addEventListener('submit', handleSearchFormSubmit);
// }