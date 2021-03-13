import React from 'react'
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import Slide1 from './assets/images/1.jpg'
import Slide2 from './assets/images/2.jpg'
import Slide3 from './assets/images/3.jpg'
import Slide4 from './assets/images/4.jpg'

function Slider() {

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical,
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
                    <div className="swiper-slide"><img src={Slide1} alt='img-1' /></div>
                    <div className="swiper-slide"><img src={Slide2} alt='img-2' /></div>
                    <div className="swiper-slide"><img src={Slide3} alt='img-3' /></div>
                    <div className="swiper-slide"><img src={Slide4} alt='img-4' /></div>
                </div>

                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

            </div>
        </div>
    )
}

export default Slider
