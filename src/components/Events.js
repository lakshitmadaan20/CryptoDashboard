import React, { useEffect, useState } from 'react'
import EventsData from './EventsData';
import axios from 'axios'

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
            <h1 className="mt-4 text-center">Top Upcoming Events</h1>
            <hr/>
            {loading ? isLoading() : 
            <div className="row">
                {eventsData.map((event,i) => (
                    <div key={i} className="col-4 mb-3">
                        <EventsData events={event} i={i} />
                    </div>
                ))}
            </div>
            }
        </div>
   )
}

export default Events;