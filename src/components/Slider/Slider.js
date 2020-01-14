import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import './slider.scss';

Slider.propTypes = {
    items: PropTypes.array.isRequired
};


function Slider({updateSwiper, children}) {

    // const params = {
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'fraction',
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     }
    // };


    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // effect: 'cube',
            grabCursor: true,
            // cubeEffect: {
            //     shadow: true,
            //     slideShadows: true,
            //     shadowOffset: 20,
            //     shadowScale: 0.94,
            // },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            renderBullet: (index, style) => {
                if (index === 0) return '<span class="' + style + '">' + 'home' + '</span>';
                if (index === 1) return '<span class="' + style + '">' + 'about' + '</span>';
                if (index === 2) return '<span class="' + style + '">' + 'portfolio' + '</span>';
                if (index === 3) return '<span class="' + style + '">' + 'contact' + '</span>';
            }
        },
    };



    return (
        <>
            <Swiper {...params} getSwiper={updateSwiper}>
                {children}
            </Swiper>
        </>
    )
}

export default Slider;