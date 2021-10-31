import React, { useEffect, useState } from 'react'
import UpdatesData from './UpdatesData';
import axios from 'axios'
import {Grid} from '@material-ui/core'

const Updates = () => {

    const [status, setStatus] = useState([]);
    const [loading, setLoading] = useState(false)
    
    const getEvents = () => {
        setLoading(true)
        axios.get('https://api.coingecko.com/api/v3/status_updates')
        .then(eventList => {
            setStatus(eventList.data.status_updates)
            setLoading(false)
        })
        .catch(console.error)
    }

    useEffect(() => {
       setInterval(getEvents(),3000)
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
            <h1 className="mt-4 text-center  text-white">Top Upcoming Updates</h1>
            <hr/>
            {loading ? isLoading() : 
              <Grid container spacing={2} style={{gap: '20px', marginBottom:'20px', justifyContent: 'center'}} >
                {status.map((u,i) => {
                    return <UpdatesData
                     key={i}
                     description={u.description}
                     category={u.category}
                     thumb={u.project.image.thumb}
                     image={u.project.image.large}
                     projectName={u.project.name}
                     createdAt={u.created_at}
                    />
                })}
                </Grid>
            }
        </div>
   )
}

export default Updates;