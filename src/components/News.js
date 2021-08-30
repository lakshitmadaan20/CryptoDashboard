import React, { useEffect, useState } from 'react'
import {Grid} from '@material-ui/core'
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
       setInterval(getNews(),3000)
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
            <h1 className="mt-4 text-center">Top 50 Latest News</h1>
            <hr/>
            {loading ? isLoading() : 
           <Grid container spacing={2} style={{gap: '20px', justifyContent: 'center'}} >
                {newsData.map((news, i) => {
                    return <NewsData news={news} i={i} />
                })}
            </Grid>
            }
            </div>
   )
}

export default News;