import React from 'react'
import HomeShort from './HomeShort'
import HomeNews from './HomeNews'
// import GlobalData from './GlobalData'

const Home = () => {
    return (
        <div div className="container">
            {/* <GlobalData/> */}
            {/* <br/>
            <hr/> */}
            <HomeShort/>
            <br/>
            <hr/>
             <HomeNews/>
        </div>
    )
}

export default Home
