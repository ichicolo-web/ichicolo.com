$(function () {
  $('form.contact').submit(function (e) {
    e.preventDefault();

    var inputs = $('form.contact :input')
      , serial = inputs.serializeArray()
      , htmlspecialchars = function (data) { 
        data = data.replace(/&/g,"&amp;");
        data = data.replace(/"/g,"&quot;");
        data = data.replace(/'/g,"&#039;");
        data = data.replace(/</g,"&lt;");
        data = data.replace(/>/g,"&gt;");
        return data ;
      };
    
    /*
     ** error check
     */
    $("p.error").remove();
    $('td').removeClass('error');

    $('input, textarea').filter('.validate').each(function () {
      
      /*
       ** empty
       */
      $(this).filter('.required').each(function () {
        if(htmlspecialchars($(this).val()) == '') {
          $(this).parent().append("<p class='error'>This information is required. | 必須項目です。</p>");
        }
      });
 
      /*
       ** email
       */     
      $(this).filter('#email').each(function () {
        if(htmlspecialchars($(this).val()) && !htmlspecialchars($(this).val()).match(/.+@.+\..+/g)) {
          $(this).parent().append("<p class='error'>Please enter a valid email address. | メールアドレスの形式が異なります。</p>");
        }
      })
      
      /*
       ** confirm_email
       */     
      $(this).filter('#confirm_email').each(function () {
        if(htmlspecialchars($(this).val()) && htmlspecialchars($(this).val()) !== htmlspecialchars($('input[name="email"]').val())) {
          $(this).parent().append("<p class='error'>The email addresses you entered do not match. | メールアドレスが一致しません。</p>");
        }
      })
    });

    if($('p.error').size() > 0) {
      $('p.error').parent().addClass('error');
      
      return false;
    }
    /*
     ** /error check
     */
     
    $.ajax({
      type: 'GET',
      url: '/contacts/confirm.html',
      dataType: 'html',
      success: function (data) {
        $('#contact').html($(data));
        $('#name').text(htmlspecialchars(serial[0].value));
        $('#email').text(htmlspecialchars(serial[1].value));
        $('#address').text(htmlspecialchars(serial[2].value));
        $('#content').text(htmlspecialchars(serial[3].value));
        $('input[name="name"]').val(htmlspecialchars(serial[0].value));
        $('input[name="email"]').val(htmlspecialchars(serial[1].value));
        $('input[name="address"]').val(htmlspecialchars(serial[2].value));
        $('input[name="content"]').val(htmlspecialchars(serial[3].value));
      }
    });
  });

  $(document).on('click', '#return', function () {
    var name = $('#name').text()
      , email = $('#email').text()
      , address = $('#address').text()
      , content = $('#content').text()
      ;

    $.ajax({
      type: 'GET',
      url: '/contacts/contact.html',
      dataType: 'html',
      success: function (data) {
        $('#contact').html($(data));
        $('input[name="name"]').val(name);
        $('input[name="email"]').val(email);
        $('input[name="address"]').val(address);
        $('input[name="content"]').val(content);
      }
    });
  });

  $(document).on('click', '#send', function () {
    var inputs = $('form.contact :input')
      , serial = inputs.serializeArray()
      ;

    $.ajax({
      type: 'POST',
      dataType:'json',
      url: '/contacts/send.php',
      data: {
        name: serial[0].value,
        email: serial[1].value,
        address: serial[2].value,
        content: serial[3].value
      },
      success: function (data) {
      }
    });
  });
});
