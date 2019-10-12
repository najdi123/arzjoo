import React, {Component} from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./Home.css";
import Carousel from "../components/Carousel";
import SimpleSlider from "../components/SlickCarousel";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <Carousel/>
                <SimpleSlider/>
            </div>
        );
    }
}

export default Home;
