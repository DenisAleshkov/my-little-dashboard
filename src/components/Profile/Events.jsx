import React from 'react'
import { Toast } from 'react-bootstrap'
const Events = ({ payload, type, date, repo }) => {
    console.log('payload', payload)
    function reducer (state, action) {
        switch(action.type) {
           case 'CreateEvent':
            return {
                ...state,

            }
            case 'PullRequestEvent':
                return {
                    ...state,
                    info: state.pull_request
                }
            case 'WatchEvent':
                return {
                    ...state,
                }
            default: 
                return state
        }
    }   

    const [info, dispatch] = React.useReducer(reducer, payload)
   
    React.useEffect(()=>{ 
        dispatch({type:'PullRequestEvent'})
        // console.log('info',state.info)
     },[])
     dispatch({type:'PullRequestEvent'})
    console.log('info',info)

    return (
        <Toast>
            <div className="toast-header">
                <strong className="mr-auto">{type}</strong>
                <small>{date}</small>
            </div>
        <Toast.Body>
            <div className="body-text">
                repositories:{ repo }
            </div>
            <div className="body-text">
                type:{type}
            </div>
            <div className="body-text">
                info: 
            </div>
        </Toast.Body>
        
        </Toast>
    )
}

export default Events