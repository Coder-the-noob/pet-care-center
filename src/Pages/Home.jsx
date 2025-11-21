import React from 'react';
import Slider from '../Components/Slider';
import PopularCare from '../Components/PopularCare';
import ExpertVets from '../Components/ExpertVets';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <PopularCare></PopularCare>
            <ExpertVets></ExpertVets>
        </div>
    );
};

export default Home;