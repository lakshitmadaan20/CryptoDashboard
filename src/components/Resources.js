import React, {useState, useEffect} from 'react'
import {resources} from './Data'
import ResourcesCard from './ResourcesCard'
import {Grid} from '@material-ui/core'

const Resources = () => {

    // const [list, setList] = useState([])
    // const [loading, setLoading] = useState(false)

    // const isLoading = () => {
    //     return (
    //         <div class="spinner">
    //             <div class="d-flex justify-content-center">
    //               <div class="spinner-border" role="status">
    //               </div>
    //             </div> 
    //         </div>        
    //     )
    //  }

    return (
           <div className="container">
            <h1 className="mt-4 text-center text-white">Resources</h1>
            <p className='text-center text-white'>Resources To Learn Blockchain Development</p>
            <hr/>
            {/* {loading ? isLoading() :  */}
              <Grid container spacing={2} style={{gap: '20px', marginBottom:'20px', justifyContent: 'center'}} >
                {resources.map((data, i) => {
                    return <ResourcesCard data={data} />
                })} 
            </Grid>
            {/* } */}
        </div>
    )

}

export default Resources