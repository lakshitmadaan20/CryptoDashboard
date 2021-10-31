import React from 'react'
import HomeShort from './HomeShort'
import HomeNews from './HomeNews'
// import CarouselHomepage from "./CarouselHomepage";

const Home = () => {
    return (
        <div div className="container">
            {/* <CarouselHomepage/> */}
            <HomeShort/>
            <br/>
            <hr/>
             <HomeNews/>
        </div>
    )
}

export default Home
