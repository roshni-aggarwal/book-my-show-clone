import React from 'react'
import Navbar from '../components/Navbar/Navbar.component'

const DefaultLayoutHoc =
  (Components) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Components {...props} />
        <div>Footer</div>  
      </div>
    )
  }

export default DefaultLayoutHoc;