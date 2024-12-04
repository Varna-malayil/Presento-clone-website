
$(document).ready(function() {
  // Client Logos Carousel
  $('#owl-carousel-client').owlCarousel({
    loop: true,               // Infinite loop
    margin: 10,              // Space between items
    nav: true,               // Show navigation buttons
    autoplay: true,           // Auto-slide
    autoplayTimeout: 3000,    // Time between auto-slide (3 seconds)
    responsive: {
      0: {
        items: 2             // 2 items on extra small screens
      },
      768: {
        items: 4             // 4 items on medium screens
      },
      1000: {
        items: 6             // 6 items on large screens
      }
    }
  });
});


  // Testimonials Carousel
  $(document).ready(function() {
  $('#owl-carousel-testimonials').owlCarousel({
    loop: true,             // Infinite loop
    margin: 10,             // Space between items
    nav: true,              // Show navigation buttons
           // Show dots (pagination)
    autoplay: true,         // Auto-slide
    autoplayTimeout: 5000,  // Time between auto-slide (5 seconds)
    // Pause on hover
    responsive: {
      0: {
        items: 1            // 1 item on small screens
      },
      768: {
        items: 1           // 1 items on medium screens
      },
      1000: {
        items: 3            // 3 items on large screens
      }
    }
    });
  });


// portfolio

 // Wait for the DOM to load before adding event listeners
 document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.navbar-nav .nav-item');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Function to show or hide items based on the filter
  function filterGallery(category) {
      portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (category === 'all' || category === itemCategory) {
              item.style.display = 'block'; // Show item
          } else {
              item.style.display = 'none'; // Hide item
          }
      });
  }

  // Event listeners for filter buttons
  filterItems.forEach(filter => {
      filter.addEventListener('click', function() {
          const category = filter.getAttribute('data-filter');
          filterGallery(category);
      });
  });
});



    //  counting
  
    $(function() {
      function count($this, target, duration) {
          var current = 0;  // Start from 0
          var increment = target / (duration / 50);  // Increment step based on the duration
  
          var interval = setInterval(function() {
              current += increment;
              if (current >= target) {
                  current = target; // Don't exceed target
                  clearInterval(interval); // Stop counting when target is reached
              }
              $this.text(Math.ceil(current));  // Update the counter value
          }, 50);  // 50ms delay for smooth counting
      }
  
      $(".count h1").each(function() {
          var $this = $(this);
          var target = parseInt($this.text());  // Get the target value from the HTML
          $this.text('0');  // Reset the displayed number to 0
          count($this, target, 5000);  // Start counting to target over 5 seconds (5000ms)
      });
  });
  