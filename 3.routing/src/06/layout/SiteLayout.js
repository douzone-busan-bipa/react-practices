import React, {Fragment} from 'react';
import Header from './Header';
import Navigation from  './Navigation';
import Footer from './Footer';
import style from '../assets/scss/layout/Content.scss';

function SiteLayout({children}) {
    return (
        <Fragment>
            <Header/>
                <div className={style.Content}>
                    {children}
                </div>
            <Navigation/>
            <Footer/>
        </Fragment>        
    );
}

export default SiteLayout;