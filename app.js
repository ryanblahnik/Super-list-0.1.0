$(document).ready(function() {
  let newList = [];

  //  Optional demo:
  //    - Comment out line 2.
  //    - Uncomment lines 11 through 14.
  //    - Reload the page.
  //    - Enter 'creamer' or another item from data.js, and click Add to list.
  //    - Click Sort list and go.

  // let newList = ['milk', 'eggs', 'my bread', 'banana', 'party juice', 'baked chips', 'shrimps', 'olive oil', 'dove ice cream', 'chai', 'black bean', 'cashews', 'mustard', 'fuji apple', 'peanut butter', 'buffalo', 'wheat pasta', 'cheddar biscuit', 'black bean burger', 'flips', 'tortillas', 'chicken breast', 'symphony', 'Desi bread'];
  // for (let i = 0; i < newList.length; i++) {
  //   $('.progress').append(newList[i] + '<br>');
  // }

  localStorage.setItem('newList', newList);
  $('body').on('click', '.add', function(event){
    let nextItem = $('.addition').val();
    if (nextItem) {
      newList.push(nextItem);
      localStorage.setItem('newList', newList);
      $('.progress').append(nextItem + '<br>');
      $('.sorting').html('<button class="btn btn-sm btn-block btn-outline-info sort">Sort list and go</button>');
    }
    $(".new-item").html('<input class="form-control form-control-lg addition" type="text" placeholder="New entry">');
  });
  $('body').on('click', '.sort', function(event){
    newList.sort(function (a, b) {
      return itemMap[a] - itemMap[b];
    });
    $('.progress').html('');
    for (let i = 0; i < newList.length; i++) {
      $('.progress').append(newList[i] + '<br>');
    }
    $('.sorting').html('');
  });
  $('body').on('click', '.clear', function(event){
    $(".quick-note").html('<textarea class="form-control quick" rows="5" placeholder="Quick note"></textarea>');
  });
});