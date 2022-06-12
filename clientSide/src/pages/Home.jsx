import React from 'react'
import Announcement from '../components/Announcement';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Newsletter from '../components/Newsletter';
import Product from '../components/Product';
import Slider from '../components/Slider';

const Home = () => {
    return(
        <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Category/>
        <Product/>
        <Newsletter/>
        <Footer/>
        </div>
    );
}
export default Home