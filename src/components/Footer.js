import React from 'react'
import { Typography} from 'antd';
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          All Rights Reserved.
        </Typography.Title>
      </div>
    )
}
