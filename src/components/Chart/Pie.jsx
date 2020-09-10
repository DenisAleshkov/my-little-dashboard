import React from 'react'
import { Pie } from 'react-chartjs-2'
import './Chart.css'
const PieComponent = ({ languages }) => {
 
  const labels = Object.keys(languages)
  const valueLanguage = Object.values(languages)
    .map( (item) => { return item.value } )
    
  console.log('languages',valueLanguage)
 
 
const data = {
  
    labels: labels,
   
    datasets: [{
      data: valueLanguage,
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#3ADFD1',
        '#ED6868',
        '#BEDB4C',
        '#D331C9',
        '#E17B37',
        '#51164F',
        '#497373'
      ]
    }],
  };
  const options = {
    responsive: false,
    legend: {
      labels: {
        boxWidth: 20
      }
    }
  }
 
    return(
        <div className="pie" style={
          {
            height: '500px', 
            width: '500px', 
           
          }}>
           <Pie 
                data = { data }
                width = {450}
                height = {450}
                options = {options }
                />
              
        </div>
    )
}

export default PieComponent