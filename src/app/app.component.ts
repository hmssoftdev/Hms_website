import { Component, OnInit } from '@angular/core';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Swiper } from 'swiper';
// import { SwiperComponent } from "swiper/angular";
// import { Router } from '@angular/router';

// import Swiper core and required modules


// // install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination]);

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  responsiveOptions: any[] = [];

  cars: any;
 
//  constructor(public route:Router){

//  }
  ngOnInit(): void {

this.cars={


  heading:"First",
  src:"http://fy5restaurantsoftware.com/assets/img/featuress.png"
}


// new Swiper('.testimonials-slider', {
//   speed: 600,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
//   },
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 40
//     },

//     1200: {
//       slidesPerView: 3,
//     }
//   }
// });





    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];

  }
  title = 'card';
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  
}

// get(vaar){
// this.var=vaar.value;
// }
sayHello(firstName: { value: string; }) {
  alert('Hello '+firstName.value)
}
  
}

function UrlDirect() {
  throw new Error('Function not implemented.');
}

