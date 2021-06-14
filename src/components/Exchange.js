import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ExchangeData from './ExchangeData'

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
            <div className="row">
                {list.map((list, i) => (
                    <div key={i} className="col-4 mb-3">
                        <ExchangeData data={list} />
                    </div>
                ))}
                
            </div>}
        </div>
    )

}

export default Exchange;