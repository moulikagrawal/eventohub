import './Slider.css'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import React from 'react'
import Slide1 from './1.jpg'
import Slide2 from './2.jpg'
import Slide3 from './3.jpg'
import Slide4 from './4.jpg'

function Slider() {

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        effect: 'fade',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    return (
        <div>
            {/* {<!-- Slider main container -->} */}
            <div class="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div class="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div class="swiper-slide"><img src={Slide1} alt='img-1' /></div>
                    <div class="swiper-slide"><img src={Slide2} alt='img-2' /></div>
                    <div class="swiper-slide"><img src={Slide3} alt='img-3' /></div>
                    <div class="swiper-slide"><img src={Slide4} alt='img-4' /></div>
                </div>

                {/* <!-- If we need pagination --> */}
                <div class="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

            </div>
        </div>
    )
}

export default Slider
