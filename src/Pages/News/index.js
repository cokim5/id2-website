
import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';
import WelcomeSlide from '../../Components/CREW/WelcomeSlide';
import InfoSlides from '../../Components/CREW/InfoSlides';


const News = () => {

    return (
        <div>
            <WelcomeSlide />

            <InfoSlides />
        </div>
    )
}

export default News;



