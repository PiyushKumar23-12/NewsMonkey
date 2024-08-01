import React, { Component } from 'react'
import giphy from './giphy.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
         <img src={giphy} alt="loading" style={{width: "14rem",height:"14rem"}} />
      </div>
    )
  }
}

export default Spinner;