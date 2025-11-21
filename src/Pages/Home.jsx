import React from 'react';
import Slider from '../Components/Slider';
import PopularCare from '../Components/PopularCare';
import ExpertVets from '../Components/ExpertVets';
import WinterCareTips from '../Components/WinterCareTips';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <PopularCare></PopularCare>
            <ExpertVets></ExpertVets>
            <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;