import React, { } from "react"
import { GithubContext } from './../../context/context'
import PieComponent from './../Chart/PieComponent'
import BarComponent from './../Chart/BarComponent'
import './Statisticks.css'

const Statistick = () => {

    const { repos  } = React.useContext(GithubContext)
    
    
   
   
    const languages = repos.reduce((previousValue, currentValue, index, array) => {
        const { language } = currentValue
        if(!language) return previousValue
        if(!previousValue[language]) {
            previousValue[language] = { label:language, value: 1 }
        } else {
            previousValue[language] = {
                ...previousValue[language],
                value: previousValue[language].value + 1
            }
        }
     
        return previousValue
      }, {})

      const stars = repos.reduce((previousValue, currentValue, index, array) => {
        const { name, stargazers_count } = currentValue
        if(!name) return previousValue
        if(!previousValue[name]) {
            previousValue[name] = {stars: stargazers_count }
        } else {
            previousValue[name] = {
                stars:  stargazers_count
            }
        }
     
        return previousValue
      }, {})

    
 return(
     <div className="stats main">
        <PieComponent languages = { languages } />
        <BarComponent stars = { stars }/>
     </div>
 )
}
export default Statistick