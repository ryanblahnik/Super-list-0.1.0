$(document).ready(function() {
  let newList = [];
  localStorage.setItem('newList', newList);
  $('body').on('click', '.add', function(event){
    let nextItem = $('.addition').val();
    if (nextItem) {
      newList.push(nextItem);
      localStorage.setItem('newList', newList);
      $('.progress').append(nextItem + '<br>');
      $('.sorting').html('<button class="btn btn-sm btn-block btn-outline-info sort">Sort list and go</button>');
    }
  });

  $('body').on('click', '.sort', function(event){





    // console.log(localStorage.getItem('hrext'));
    // let titleValue = localStorage.getItem('titleValue');
    // let contentValue = localStorage.getItem('contentValue');
    // myDB.get();
    // $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);





  });

  $('body').on('click', '.clear', function(event){
    $(".quick-note").html('<textarea class="form-control quick" rows="5" placeholder="Quick note"></textarea>');
  });
});