import React from 'react'
import { Pie } from 'react-chartjs-2'
const PieComponent = ({ languages }) => {
 
  const labels = Object.keys(languages)
  const valueLanguage = Object.values(languages)
    .map( (item) => { return item.value  } )
    
  console.log('languages',valueLanguage)
 
 
const data = {
    labels: labels,
    datasets: [{
      data: valueLanguage,
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
  
 
    return(
        <div className="pie">
           <Pie width={100}
                height={50} 
                data = { data } />
        </div>
    )
}

export default PieComponent