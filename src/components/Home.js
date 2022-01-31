import React from 'react'
import HomeShort from './HomeShort'
import HomeNews from './HomeNews'
import Landing from './Landing'

const Home = () => {
    return (
        <div div className="container">
            <Landing/>
            <HomeShort/>
            <br/>
            <hr/>
            <HomeNews/>
        </div>
    )
}

export default Home
