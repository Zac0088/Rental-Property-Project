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
