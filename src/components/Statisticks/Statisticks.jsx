import React, { } from "react";
import { GithubContext } from './../../context/context';
import PieComponent from './../Chart/Pie';

const Statistick = () => {

    const { loadReposInfo, repos } = React.useContext(GithubContext)
   
    React.useEffect(()=>{
        loadReposInfo('DenisAleshkov')       
        console.log(repos)
    }, [])
    
 return(
     <div>
         stat
     </div>
 )
}
export default Statistick