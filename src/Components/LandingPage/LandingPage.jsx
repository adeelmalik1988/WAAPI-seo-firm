import React from 'react';
import classes from './LandingPage.module.css';
import seobgnew from './../Images/seobgnew.jpg';
import NavbarTop from './Navbar'


function LandingPage() {
    return (
        <div >
            <NavbarTop />

            <img src={seobgnew} className={classes} alt={'SEO-background-img'} />


        </div>
    );
}

export default LandingPage;
