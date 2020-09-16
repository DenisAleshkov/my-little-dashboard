import React from 'react'
import { Bar } from 'react-chartjs-2'
import { GithubContext } from './../../context/context'

const BarComponent = ({ stars }) => {

   
    const { contributions } = React.useContext(GithubContext)
  
    
    const data = {
    
    datasets: [{
      data: contributions,
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
        '#497373',
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
    
  }
    return (
        <div className="bar" style={{
            'height': '450px',
            'width': '450px'
        }}>
            <Bar 
              width = {400}
              height = {400}
              
              data={data}/>
        </div >
    )
}

export default BarComponent