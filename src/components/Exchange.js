import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ExchangeData from './ExchangeData'
import {Grid} from '@material-ui/core'

const Exchange = () => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async() => {
        const url = "https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1"
        setLoading(true)
        await axios.get(url)
        .then((res) => {
        console.log(res.data)
        setList(res.data)
        setLoading(false)
        })
        .catch((error) => {
            alert(error, "Not able to load data")
        })
    }

    useEffect(() => {
        setInterval(getData(), 3000)
    },[])

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
            <h1 className="mt-4 text-center">Top 50 Exchanges</h1>
            <hr/>
            {loading ? isLoading() : 
              <Grid container spacing={2} style={{gap:'20px', justifyContent: 'center'}}>
                {list.map((list, i) => {
                    return <ExchangeData data={list} />
                })} 
            </Grid>}
        </div>
    )

}

export default Exchange;