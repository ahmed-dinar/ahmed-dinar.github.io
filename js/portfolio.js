    var myselfs = [
        'PROBLEM SOLVER',
        'COFFEE LOVER',
        'TECHNOLOGY ENTHUSIAST',
        'COMPETITIVE PROGRAMMING ENTHUSIAST',
        'FULL STACK DEVELOPER'
    ];
    var my = 0;

    $(document).ready(function() {

        $('.tips').tipsy({
            fade: false,
            gravity: 'n'
        });

      $('.myself').text(myselfs[my].toUpperCase());
      setInterval(quoteTimer, 3000);


      $(".nav-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });


    });

    var quoteTimer = function() {

      if (++my >= myselfs.length)
        my = 0;
      
      $('.myself').fadeOut(200, function(){
        // $(this).text(myselfs[my].toUpperCase());
        $(this).text(myselfs[my].toUpperCase());
        $(this).fadeIn();
      });
      
    }