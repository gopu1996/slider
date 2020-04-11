import React, { Component } from 'react'
import Slider from '../component/Slider/Slider'
import axios from 'axios'
import DisplayAmountInterest from '../component/DisplayAmountInterest/DisplayAmountInterest';




class Container extends Component {
   
  

  state = {
    min:500,
    max:5000,
    sliderValue: 500,
    selectedValue : 6,
    interestValue : '',
    monthlyPayment: ''
  }

  componentDidUpdate(_,prevState){
      const amountValue = this.state.sliderValue;
      const monthValue =this.state.selectedValue
      if (
        prevState.sliderValue !== this.state.sliderValue ||
        prevState.selectedValue !== this.state.selectedValue
      ) {
      axios.get(`/interest?amount=${amountValue}&numMonths=${monthValue}`)
      .then(respose =>{
           const  interest = respose.data.interestRate;
           const monthly = respose.data.monthlyPayment.amount;
           this.setState({
               interestValue: interest,
               monthlyPayment:monthly
           })

      })
    }
  }

  sliderChangeHandler = (event) =>{
    this.setState({
      sliderValue: event.target.value,
    })
  }

  selectChangeHandler = event =>{
    this.setState({
      selectedValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
       <Slider min={this.state.min} 
        max={this.state.max}
         changedValue = {this.state.sliderValue}
         changed= {this.sliderChangeHandler}
         drag={this.selectChangeHandler}
         selectedValue ={this.state.selectedValue}  
        />
        <DisplayAmountInterest interest = {this.state.interestValue}  
        monthlyInstallment = {this.state.monthlyPayment}/> 
       </div>
    )
  }
}
export default  Container
