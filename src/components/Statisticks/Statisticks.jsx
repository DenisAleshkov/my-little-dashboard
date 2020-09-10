import React, { } from "react";
import { GithubContext } from './../../context/context';
import PieComponent from './../Chart/Pie';

const Statistick = () => {

    const { repos  } = React.useContext(GithubContext)

   
    const languages = repos.reduce((previousValue, currentValue, index, array) => {
        const { language } = currentValue
        if(!language) return previousValue;
        if(!previousValue[language]) {
            previousValue[language] = { label:language, value: 1 }
        } else {
            previousValue[language] = {
                ...previousValue[language],
                value: previousValue[language].value + 1 
            }
        }
     
        return previousValue
      }, {});

      
   
   
    
 return(
     <div>
        <PieComponent languages = {languages} />
     </div>
 )
}
export default Statistick