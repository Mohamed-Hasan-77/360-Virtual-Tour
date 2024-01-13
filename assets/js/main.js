
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

 
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

 
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links 
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


  

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()



let closeBtn = document.querySelector(".navCloseIcon")
let navbarDrawer = document.querySelector("#navbarDrawer")
let DrawerToggle = document.querySelector(".DrawerToggle")

DrawerToggle.onclick = () => {
  navbarDrawer.style.right = "0";
}

closeBtn.onclick = () => {
  navbarDrawer.style.right = "-100%";
}








    // Client Filter and data ------------------------




    let clientWrapper = document.querySelector(".clientWrapper");

    let clientsDataAll = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      
    ] 

    let clientsDataHotels = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      
    ] 



    let clientsDataRetreats = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },

      
    ] 




    let clientsDataRestaurants = [ 

      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      
    ] 



    let clientsDataWork = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },

      
    ] 



    let clientsDataSaudi = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },

      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },

      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      
    ] 



    let clientsDataEgypt = [ 
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
    ] 



    let clientsDataUAE = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },

      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },

      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      
    ] 



    let clientsDataKuwait = [ 
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"
      },
      {
        name: " Shark Company ",
        specialization: " Real Estate  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client2.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      {
        name: " Tiger Tower ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client3.jpg",
        url: "#"

      },
      {
        name: " Pyramids Tower  ",
        specialization: " skyscraper  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client4.jpg",
        url: "#"

      },
      {
        name: " Leon Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client5.jpg",
        url: "#"

      },
      {
        name: " Lava Hotel ",
        specialization: " Hotel  ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora illo architecto doloremque soluta.`,
        img :  "./assets/img/images/Clients/client1.jpg",
        url: "#"

      },
      
    ] 




  function filterBy(filterOption) {

    let filterItemsActive = document.querySelectorAll(".filterItems li");

    filterItemsActive.forEach(function (item) {
      item.classList.remove('active');
  });


  let filterItemsTwo = document.querySelectorAll(".filterItemsTwo li");

  filterItemsTwo.forEach(function (item) {
    item.classList.remove('active');
});

  document.getElementById(filterOption).classList.add('active')

    let box = ""
    switch (filterOption) {
      case "All":  

      for(let i=0; i<=clientsDataAll.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">

        <img src="${clientsDataAll[i]?.img}" alt="client1">

            <div class="card-front">
                <p class="title"> ${clientsDataAll[i]?.name} </p>
                <p class="subtitle"> ${clientsDataAll[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataAll[i]?.name} </h3>
                <p>  ${clientsDataAll[i]?.specialization} </p>
                <p>  ${clientsDataAll[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataAll[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "Hotels":

      for(let i=0; i<=clientsDataHotels.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">

        <img src="${clientsDataHotels[i]?.img}" alt="client1">

            <div class="card-front">
                <p class="title"> ${clientsDataHotels[i]?.name} </p>
                <p class="subtitle"> ${clientsDataHotels[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataHotels[i]?.name} </h3>
                <p>  ${clientsDataHotels[i]?.specialization} </p>
                <p>  ${clientsDataHotels[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataHotels[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "Retreats":
      
      for(let i=0; i<=clientsDataRetreats.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">
        <img src="${clientsDataRetreats[i]?.img}" alt="client1">
            <div class="card-front">
                <p class="title"> ${clientsDataRetreats[i]?.name} </p>
                <p class="subtitle"> ${clientsDataRetreats[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataRetreats[i]?.name} </h3>
                <p>  ${clientsDataRetreats[i]?.specialization} </p>
                <p>  ${clientsDataRetreats[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataRetreats[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }



        clientWrapper.innerHTML = box
        break;
    case "Restaurants":
      
      for(let i=0; i<=clientsDataRestaurants.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">
        <img src="${clientsDataRestaurants[i]?.img}" alt="client1">
            <div class="card-front">
                <p class="title"> ${clientsDataRestaurants[i]?.name} </p>
                <p class="subtitle"> ${clientsDataRestaurants[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataRestaurants[i]?.name} </h3>
                <p>  ${clientsDataRestaurants[i]?.specialization} </p>
                <p>  ${clientsDataRestaurants[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataRestaurants[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "work":
      
      for(let i=0; i<=clientsDataWork.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">
        <img src="${clientsDataWork[i]?.img}" alt="client1">
            <div class="card-front">
                <p class="title"> ${clientsDataWork[i]?.name} </p>
                <p class="subtitle"> ${clientsDataWork[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataWork[i]?.name} </h3>
                <p>  ${clientsDataWork[i]?.specialization} </p>
                <p>  ${clientsDataWork[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataWork[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "Saudi":
      
      for(let i=0; i<=clientsDataSaudi.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">
        <img src="${clientsDataSaudi[i]?.img}" alt="client1">
            <div class="card-front">
                <p class="title"> ${clientsDataSaudi[i]?.name} </p>
                <p class="subtitle"> ${clientsDataSaudi[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataSaudi[i]?.name} </h3>
                <p>  ${clientsDataSaudi[i]?.specialization} </p>
                <p>  ${clientsDataSaudi[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataSaudi[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "Egypt":
      
      for(let i=0; i<=clientsDataEgypt.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">
        <img src="${clientsDataEgypt[i]?.img}" alt="client1">
            <div class="card-front">
                <p class="title"> ${clientsDataEgypt[i]?.name} </p>
                <p class="subtitle"> ${clientsDataEgypt[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataEgypt[i]?.name} </h3>
                <p>  ${clientsDataEgypt[i]?.specialization} </p>
                <p>  ${clientsDataEgypt[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataEgypt[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "UAE":
      
      for(let i=0; i<=clientsDataUAE.length - 1; i++) {
        box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
        data-aos-delay="100">
        <div class="clientCard shadow">
        <img src="${clientsDataUAE[i]?.img}" alt="client1">
            <div class="card-front">
                <p class="title"> ${clientsDataUAE[i]?.name} </p>
                <p class="subtitle"> ${clientsDataUAE[i]?.specialization} </p>
            </div>
            <div class="card-back">
                <h3> ${clientsDataUAE[i]?.name} </h3>
                <p>  ${clientsDataUAE[i]?.specialization} </p>
                <p>  ${clientsDataUAE[i]?.description} </p>

                <div class="links d-flex justify-content-between align-items-center">
                    <span class="goToProject"> <a href=" ${clientsDataUAE[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                        </a> </span>
                </div>
            </div>
        </div>
    </div>
    `

      }

        clientWrapper.innerHTML = box
        break;
    case "Kuwait":
          
          for(let i=0; i<=clientsDataKuwait.length - 1; i++) {
            box = box + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
            data-aos-delay="100">
            <div class="clientCard shadow">
            <img src="${clientsDataKuwait[i]?.img}" alt="client1">
                <div class="card-front">
                    <p class="title"> ${clientsDataKuwait[i]?.name} </p>
                    <p class="subtitle"> ${clientsDataKuwait[i]?.specialization} </p>
                </div>
                <div class="card-back">
                    <h3> ${clientsDataKuwait[i]?.name} </h3>
                    <p>  ${clientsDataKuwait[i]?.specialization} </p>
                    <p>  ${clientsDataKuwait[i]?.description} </p>
    
                    <div class="links d-flex justify-content-between align-items-center">
                        <span class="goToProject"> <a href=" ${clientsDataKuwait[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
                            </a> </span>
                    </div>
                </div>
            </div>
        </div>
        `
    
          }
    
            clientWrapper.innerHTML = box
        break;
    default:
        clientWrapper.innerHTML = "Invalid Data";
    }
  }






