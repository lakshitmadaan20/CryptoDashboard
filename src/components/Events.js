import React, { useEffect, useState } from 'react'
import EventsData from './EventsData';
import axios from 'axios'
import {Grid} from '@material-ui/core'

const Events = () => {

    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getEvents = () => {
        setLoading(true)
        axios.get('https://api.coingecko.com/api/v3/events')
        .then(eventList => {
            console.log(eventList.data.data)
            setEventsData(eventList.data.data)
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
            <h1 className="mt-4 text-center  text-white">Top Upcoming Events</h1>
            <hr/>
            {loading ? isLoading() : 
              <Grid container spacing={2} style={{gap: '20px', justifyContent: 'center'}} >
                {eventsData.map((event,i) => {
                        return <EventsData events={event} i={i} />
                })}
                </Grid>
            }
        </div>
   )
}

export default Events;