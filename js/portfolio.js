





    var myselfs = [
        'PROBLEM SOLVER',
        'TECHNOLOGY ENTHUSIAST',
        'COMPETITIVE PROGRAMMING ENTHUSIAST',
        'FULL STACK DEVELOPER',
        'SOFTWARE ENGINEER'
    ];
    var my = 0;


    $(document).ready(function() {

      //custom scrool bar
      $(function() {  
        $("body").niceScroll({
          cursorwidth: "10px",
          background: "#fff",
          cursorborder: "1px solid transparent"
        });
      });

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
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });




      // ===== Scroll to Top (c) https://codepen.io/rdallaire/pen/apoyx/ ==== 
      $(window).scroll(function() {
          if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
              $('#return-to-top').fadeIn(400);    // Fade in the arrow
          } else {
              $('#return-to-top').fadeOut(400);   // Else fade out the arrow
          }
      });
      
      $('#return-to-top').click(function() {      // When arrow is clicked
          $('body,html').animate({
              scrollTop : 0                       // Scroll to top of body
          }, 1000);
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