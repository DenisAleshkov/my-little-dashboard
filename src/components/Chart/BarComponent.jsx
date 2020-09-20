import React from 'react'
import { Bar } from 'react-chartjs-2'
import { GithubContext } from './../../context/context'

const BarComponent = () => {

  const { contributions } = React.useContext(GithubContext)
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    function daysInMonth(month, year) {

        let arrayDay = new Array(new Date(year, month, 0).getDate())
        let days =  [...arrayDay.keys()]
        days.shift()
        return days

    }
    const date = new Date()
    const days = daysInMonth(date.getMonth(), date.getFullYear())

    const data = {
    labels: days,
    datasets: [{
      label: `Сontributions in the ${MONTHS[date.getMonth()]}`,
      data: contributions,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
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
              
              data={data}/>
        </div >
    )
}

export default BarComponent