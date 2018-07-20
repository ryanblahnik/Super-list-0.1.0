$(document).ready(function() {
  // attach event listener to buttons(input)
  // create function stub for read/write/delete
  // $().on('click', function(){

  // });
  $('.set-btn').on('click', function(event){
    localStorage.setItem('hrext', "three is the best");
  });

  $('.get-btn').on('click', function(event){
    console.log(localStorage.getItem('hrext'));
  });

  $('.delete-btn').on('click', function(event){
    console.log(localStorage.removeItem('hrext'));
  });

});



