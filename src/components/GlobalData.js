// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const GlobalData = () => {

//     const [eventsData, setEventsData] = useState([]);
//     const [loading, setLoading] = useState(false)

//     const getEvents = () => {
//         setLoading(true)
//         axios.get('https://api.coingecko.com/api/v3/global/decentralized_finance_defi')
//         .then(eventList => {
//             console.log(eventList.data.data)
//             setEventsData(eventList.data.data)
//             setLoading(false)
//         })
//         .catch(console.error)
//     }

//     useEffect(() => {
//        setInterval(getEvents(),3000)
//     }, [])

//     const isLoading = () => {
//         return (
//             <div class="spinner">
//                 <div class="d-flex justify-content-center">
//                   <div class="spinner-border" role="status">
//                   </div>
//                 </div> 
//             </div>        
//         )
//      }


//     return (
//         <div className="container">
//             <h1 className="mt-4 text-center  text-white">Global Crypto Status</h1>
//             <hr/>
//             {loading ? isLoading() : 
//               <div>
//                   <p>Active Cryptocurrencies: {eventsData.}</p>
//                   <p>Upcoming ICO: {eventsData.}</p>
//                   <p>Ongoing ICO: {eventsData.}</p>
//                   <p>Ended ICO: {eventsData.}</p>
//                   {/* <p>Market Cap BTC: {eventsData.total_market_cap.btc}</p> */}
                  
//               </div>
//             }
//         </div>
//    )
// }

// export default GlobalData;