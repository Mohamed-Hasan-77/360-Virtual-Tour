
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







// // ِالفلتر العربي --------------------------------------------------------




//  // Client Filter and data ------------------------




let arClientWrapper = document.querySelector(".arClientWrapper");
console.log(arClientWrapper);

  let arClientsDataAll = [ 
    {
      name: " فندق ",
      specialization: "  شركة للتسويق العقار  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
      استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"
    },
    {
      name: " مقهي ",
      specialization: " ترفيهي ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    {
      name: " مبني ",
      specialization: "  شركة للتسويق العقاري  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " برج   ",
      specialization: "  شركة للتسويق العقار  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " فندق  ",
      specialization: " تخصص الشركة  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " فندق  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    {
      name: "شركة  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " منتزه ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    
  ] 

  let arClientsDataHotels = [ 
    {
      name: " فندق ",
      specialization: "  شركة للتسويق العقار  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
      استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"
    },
    {
      name: " مقهي ",
      specialization: " ترفيهي ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    {
      name: " مبني ",
      specialization: "  شركة للتسويق العقاري  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " برج   ",
      specialization: "  شركة للتسويق العقار  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " فندق  ",
      specialization: " تخصص الشركة  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " فندق  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    {
      name: "شركة  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    
  ] 



  let arClientsDataRetreats = [ 
    {
      name: "شركة  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " منتزه ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },

    
  ] 




  let arClientsDataRestaurants = [ 

    {
      name: "شركة  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " منتزه ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    {
      name: "شركة  ",
      specialization: "  تخصص الشركة   ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client2.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " منتزه ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    
  ] 



  let arClientsDataWork = [ 
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " منتزه ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },

    
  ] 



  let arClientsDataSaudi = [ 
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " منتزه ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client1.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
  ] 



  let arClientsDataEgypt = [ 
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
  ] 



  let arClientsDataUAE = [ 
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    
  ] 



  let arClientsDataKuwait = [ 
    {
      name: " قرية سياحية ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client5.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    {
      name: " مطعم  ",
      specialization: " Hotel  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client3.jpg",
      url: "#"

    },
    {
      name: " كافتيريا  ",
      specialization: " skyscraper  ",
      description: `تجلب خدمة الجولة الافتراضية 360 إلى شركتك التسويقية العقارية تجربة استعراض مبتكرة، حيث يمكن للعملاء
                استكشاف الممتلكات بزوايا متعددة واتخاذ قرارات مستنيرة.`,
      img :  "./assets/img/images/Clients/client4.jpg",
      url: "#"

    },
    
    
  ] 





  let arBox = ""

  for(let i=0; i<=arClientsDataAll.length - 1; i++) {
    arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
    data-aos-delay="100">
    <div class="clientCard shadow">

    <img class="cardBack" src="${arClientsDataAll[i]?.img}" alt="client1">

        <div class="card-front">
            <p class="title"> ${arClientsDataAll[i]?.name} </p>
            <p class="subtitle"> ${arClientsDataAll[i]?.specialization} </p>
        </div>
        <div class="card-back">
        <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
            <h3> ${arClientsDataAll[i]?.name} </h3>
            <p>  ${arClientsDataAll[i]?.specialization} </p>
            <p>  ${arClientsDataAll[i]?.description} </p>

            <div class="links d-flex justify-content-between align-items-center">
                <span class="goToProject"> <a href=" ${arClientsDataAll[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                    </a> </span>
            </div>
        </div>
    </div>
</div>
`

  }

    arClientWrapper.innerHTML = arBox


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


  switch (filterOption) {
    case "All":

    for(let i=0; i<=arClientsDataAll.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">

      <img class="cardBack" src="${arClientsDataAll[i]?.img}" alt="client1">

          <div class="card-front">
              <p class="title"> ${arClientsDataAll[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataAll[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataAll[i]?.name} </h3>
              <p>  ${arClientsDataAll[i]?.specialization} </p>
              <p>  ${arClientsDataAll[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataAll[i]?.url}"> Go to Project <i class="fa-solid fa-link"></i>
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

    for(let i=0; i<=arClientsDataHotels.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">

      <img class="cardBack" src="${arClientsDataHotels[i]?.img}" alt="client1">

          <div class="card-front">
              <p class="title"> ${arClientsDataHotels[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataHotels[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataHotels[i]?.name} </h3>
              <p>  ${arClientsDataHotels[i]?.specialization} </p>
              <p>  ${arClientsDataHotels[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataHotels[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }

      arClientWrapper.innerHTML = arBox
      break;
  case "Retreats":
    
    for(let i=0; i<=arClientsDataRetreats.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">
      <img class="cardBack" src="${arClientsDataRetreats[i]?.img}" alt="client1">
          <div class="card-front">
              <p class="title"> ${arClientsDataRetreats[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataRetreats[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataRetreats[i]?.name} </h3>
              <p>  ${arClientsDataRetreats[i]?.specialization} </p>
              <p>  ${arClientsDataRetreats[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataRetreats[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }



      arClientWrapper.innerHTML = arBox
      break;
  case "Restaurants":
    
    for(let i=0; i<=arClientsDataRestaurants.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">
      <img class="cardBack" src="${arClientsDataRestaurants[i]?.img}" alt="client1">
          <div class="card-front">
              <p class="title"> ${arClientsDataRestaurants[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataRestaurants[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataRestaurants[i]?.name} </h3>
              <p>  ${arClientsDataRestaurants[i]?.specialization} </p>
              <p>  ${arClientsDataRestaurants[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataRestaurants[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }

      arClientWrapper.innerHTML = arBox
      break;
  case "work":
    
    for(let i=0; i<=arClientsDataWork.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">
      <img class="cardBack" src="${arClientsDataWork[i]?.img}" alt="client1">
          <div class="card-front">
              <p class="title"> ${arClientsDataWork[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataWork[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataWork[i]?.name} </h3>
              <p>  ${arClientsDataWork[i]?.specialization} </p>
              <p>  ${arClientsDataWork[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataWork[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }

      arClientWrapper.innerHTML = arBox
      break;
  case "Saudi":
    
    for(let i=0; i<=arClientsDataSaudi.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">
      <img class="cardBack" src="${arClientsDataSaudi[i]?.img}" alt="client1">
          <div class="card-front">
              <p class="title"> ${arClientsDataSaudi[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataSaudi[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataSaudi[i]?.name} </h3>
              <p>  ${arClientsDataSaudi[i]?.specialization} </p>
              <p>  ${arClientsDataSaudi[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataSaudi[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }

      arClientWrapper.innerHTML = arBox
      break;
  case "Egypt":
    
    for(let i=0; i<=arClientsDataEgypt.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">
      <img class="cardBack" src="${arClientsDataEgypt[i]?.img}" alt="client1">
          <div class="card-front">
              <p class="title"> ${arClientsDataEgypt[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataEgypt[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataEgypt[i]?.name} </h3>
              <p>  ${arClientsDataEgypt[i]?.specialization} </p>
              <p>  ${arClientsDataEgypt[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataEgypt[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }

      arClientWrapper.innerHTML = arBox
      break;
  case "UAE":
    
    for(let i=0; i<=arClientsDataUAE.length - 1; i++) {
      arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
      data-aos-delay="100">
      <div class="clientCard shadow">
      <img class="cardBack" src="${arClientsDataUAE[i]?.img}" alt="client1">
          <div class="card-front">
              <p class="title"> ${arClientsDataUAE[i]?.name} </p>
              <p class="subtitle"> ${arClientsDataUAE[i]?.specialization} </p>
          </div>
          <div class="card-back">
          <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
              <h3> ${arClientsDataUAE[i]?.name} </h3>
              <p>  ${arClientsDataUAE[i]?.specialization} </p>
              <p>  ${arClientsDataUAE[i]?.description} </p>

              <div class="links d-flex justify-content-between align-items-center">
                  <span class="goToProject"> <a href=" ${arClientsDataUAE[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                      </a> </span>
              </div>
          </div>
      </div>
  </div>
  `

    }

      arClientWrapper.innerHTML = arBox
      break;
  case "Kuwait":
        
        for(let i=0; i<=arClientsDataKuwait.length - 1; i++) {
          arBox = arBox + `<div class="col-xl-4   col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
          data-aos-delay="100">
          <div class="clientCard shadow">
          <img class="cardBack" src="${arClientsDataKuwait[i]?.img}" alt="client1">
              <div class="card-front">
                  <p class="title"> ${arClientsDataKuwait[i]?.name} </p>
                  <p class="subtitle"> ${arClientsDataKuwait[i]?.specialization} </p>
              </div>
              <div class="card-back">
              <img src="./assets/img/images/360-view.png" class="img360" alt="360-view">
                  <h3> ${arClientsDataKuwait[i]?.name} </h3>
                  <p>  ${arClientsDataKuwait[i]?.specialization} </p>
                  <p>  ${arClientsDataKuwait[i]?.description} </p>
  
                  <div class="links d-flex justify-content-between align-items-center">
                      <span class="goToProject"> <a href=" ${arClientsDataKuwait[i]?.url}"> إذهب الي المشروع <i class="fa-solid fa-link"></i>
                          </a> </span>
                  </div>
              </div>
          </div>
      </div>
      `
  
        }
  
          arClientWrapper.innerHTML = arBox
      break;
  default:
      arClientWrapper.innerHTML = "Invalid Data";
  }
}




