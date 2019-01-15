$(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 20,
               
                nav: false,
                loop: true,
                autoplay: false,
                dots: false,
                responsive: {
                  1000: {
                    items: 1
                  }
                }
              })
            })