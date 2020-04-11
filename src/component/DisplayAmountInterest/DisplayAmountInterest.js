import React from 'react'
import './DisplayAmountInterest.css'

const DisplayAmountInterest = props => {
    return (

        <div className = "FullPost">
                 <h1>intrest value : {props.interest}</h1>
                  <h1>monthly insstallment : {props.monthlyInstallment}</h1>
        </div>
    )

}


export default DisplayAmountInterest
