import React from 'react'
import './Slider.css'

const Slider = (props) => {
    let selectedValue = [];
    for(let i=6; i<=24 ;i++){
        selectedValue[i] = i
    }
    return (
        <form className ="NewPost">

        <div className="range-control">
            <input type="range"
             min={props.min}
             max={props.max}
             onChange={props.changed}
            />
             <output> {props.changedValue}</output>
        </div>
  
         <select  onChange={props.drag} >
             {selectedValue.map(selValue =>(
               <option key={selValue}>{selValue}</option>
               ))}
        </select>

        </form>
    )
}

export default Slider
