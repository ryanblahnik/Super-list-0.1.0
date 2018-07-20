// const myDB = require('myDatabaseInfo');
//   for external storage

$(document).ready(function() {
  // attach event listener to buttons(input)
  // create function stub for read/write/delete
  // $().on('click', function(){

  // });
  $('.set-btn').on('click', function(event){
    let titleValue = $('.input-field-title').val();
    let contentValue = $('.input-field-body').val();    
    localStorage.setItem('titleValue', titleValue);
    localStorage.setItem('contentValue', contentValue);  
    // myDB.put();  
  });

  $('.get-btn').on('click', function(event){
    // console.log(localStorage.getItem('hrext'));
    let titleValue = localStorage.getItem('titleValue');
    let contentValue = localStorage.getItem('contentValue');
    // myDB.get();
    $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);  
  });

  $('.delete-btn').on('click', function(event){
    localStorage.removeItem('titleValue');
    localStorage.removeItem('contentValue');

    // if (!localStorage.getItem('titleValue') && !localStorage.getItem('contentValue') {
    //   $('.debug').html(`<p>Items deleted</p>`); 
    // } else {
    //   $('.debug').html(`<p>HWHAP</p>`); 

    // console.log(localStorage.removeItem('hrext'));

    // TODO add in a confirm
        // Window.confirm();
        // result = window.confirm(message)
        //  if statement around that line
    // throw up a confirm window
    // capture result
    // test boolean to delete or not
    
  });

});