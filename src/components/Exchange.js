import React, {useState, useEffect} from 'react'
import axios from 'axios'
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchange = () => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/exchanges',
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': 'f671c97d96mshf9fb5c54dba0a98p1eb7bcjsn678d1e7cfc8b'
        }
      };

    const getData = async() => {
        axios.request(options)
        .then((res) => {
        console.log(res.data.data.exchanges)
        setList(res.data.data.exchanges)
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
       <div></div>
      );
}

export default Exchange;