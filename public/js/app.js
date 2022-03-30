$(document).foundation()

//comment box
let main = function() {
  $('.btn').click(function(event) {
      event.preventDefault();
      console.log(event.target.id.replaceAll(/\D/g, ""));
    let post = $(`#inputfield_${event.target.id.replaceAll(/\D/g, "")}`).val();
    $('<li>').text(post).prependTo(`#posts_${event.target.id.replaceAll(/\D/g, "")}`);
    $(`#inputfield_${event.target.id.replaceAll(/\D/g, "")}`).val('');
  });
  }

//     // $('.status-box').keyup(function() {
//     //   let postLength = $(this).val().length;
//     //   let charactersLeft = 500 - postLength;
//     //   $('.counter').text(charactersLeft);
//     //   if (charactersLeft < 0) {
//     //     $('.btn').addClass('disabled');
//     //   } else if (charactersLeft === 500) {
//     //     $('.btn').addClass('disabled');
//     //   } else {
//     //     $('.btn').removeClass('disabled');
//     //   }
//     // });
//   }

  $(document).ready(main)