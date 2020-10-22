import React from 'react';
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";

import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';

const Header = () => {

	// const images = [header1, header2, header3];
	// const index = Math.floor(Math.random() * images.length)
	
	// const img = images[index];
    return (
        <>
            <Switch>
             <Route exact path="/" render={() => (
                <img src={header1} alt="City"/>
            )} />
             <Route path="/products" render={() => (
                <img src={header2} alt="City"/>
            )} />
             <Route path="/contact" render={() => (
                <img src={header3} alt="City"/>
            )}/>
            <Route path="/admin" render={() => (
                <img src={header3} alt="City"/>
						)} />
						<Route render={() => (
                <img src={header1} alt="City"/>
            )} />
            </Switch>
				
				{/* <img src={img} alt="header"/> */}
        </>
     );
}
 
export default Header;