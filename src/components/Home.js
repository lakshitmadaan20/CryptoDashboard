import React from 'react'
import HomeShort from './HomeShort'
import HomeNews from './HomeNews'
// import CarouselHomepage from "./CarouselHomepage";

const Home = () => {
    return (
        <div>
            {/* <CarouselHomepage/> */}
            <HomeShort/>
            <br/>
             <HomeNews/>
        </div>
    )
}

export default Home
