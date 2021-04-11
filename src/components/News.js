import React, { useEffect, useState } from 'react'
import NewsData from './NewsData';
const cc = require("cryptocompare")
cc.setApiKey("b1ea693d79e6f8b6d914d2a8a4afd0916244510823d8628147e8b74fd068b1e7")

const News = () => {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getNews = () => {
        setLoading(true)
        cc.newsList('EN')
        .then(newsList => {
            console.log(newsList)
            setNewsData(newsList)
            setLoading(false)
        })
        .catch(console.error)
    }

    useEffect(() => {
       getNews()
    }, [])

    const isLoading = () => {
        return (
            <div class="spinner">
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                  </div>
                </div> 
            </div>        
        )
     }


    return (
        <div className="container">
            <h2 className="mt-4 text-center">Latest News</h2>
            <hr/>
            {loading ? isLoading() : 
            <div className="row">
                {newsData.map((news, i) => (
                    <div key={i} className="col-4 mb-3">
                        <NewsData news={news} />
                    </div>
                ))}
            </div>}
        </div>
   )
}

export default News;