import React from 'react'
import { Bar } from 'react-chartjs-2'
const BarComponent = ({ stars }) => {

    const name = Object.keys(stars)

    const stargazersCount = Object.values(stars)
    .map( (item) => { return item.stars } )
   
    const data = {
  
    labels: name,
   
    datasets: [{
      data: stargazersCount,
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
    return (
        <div className="bar" style={{
            'height': '450px',
            'width': '450px'
        }}>
            <Bar 
              width = {400}
              height = {400}
              options={{ maintainAspectRatio: false }}
              data={data}/>
        </div >
    )
}

export default BarComponent