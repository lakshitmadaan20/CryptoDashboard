import React from 'react'
import { Typography} from 'antd';
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          All Rights Reserved.
        </Typography.Title>
        <a className='nav-link' href="https://sanketagarwal.substack.com/p/coming-soon?r=xs80s&utm_campaign=post&utm_medium=web">Subscribe To NewsLetter</a>
        <div class="row">
           <div class="col">
            <a className='nav-link' href="https://www.instagram.com/blockchainunmasked/">Instagram</a>
           </div>
           <div class="col">
             <a className='nav-link' href="https://www.youtube.com/channel/UChYFWdJ5lgEwS3kW9mCvCRA">Youtube</a>
           </div>
           <div class="col">
           <a className='nav-link' href="https://discord.gg/JTZaah9G">Discord</a>
           </div>
        </div>
      </div>
    )
}
