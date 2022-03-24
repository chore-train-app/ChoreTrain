$(document).foundation()

//comment box
let main = function() {
    $('.btn').click(function() {
      let post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
    });
    // $('.status-box').keyup(function() {
    //   let postLength = $(this).val().length;
    //   let charactersLeft = 500 - postLength;
    //   $('.counter').text(charactersLeft);
    //   if (charactersLeft < 0) {
    //     $('.btn').addClass('disabled');
    //   } else if (charactersLeft === 500) {
    //     $('.btn').addClass('disabled');
    //   } else {
    //     $('.btn').removeClass('disabled');
    //   }
    // });
  }

  $(document).ready(main)