import React from 'react'
import Notification from './../../utils/Notification'
import { GithubContext }  from './../../context/context'
import { InputGroup } from 'react-bootstrap'
import { FilePerson } from 'react-bootstrap-icons'

import './SearchUser.css'

const SearchUser = () => {

    const { searchGithubUser, error } = React.useContext(GithubContext)

    const [user, setUser] = React.useState('')
    const getUserData = () => {
        searchGithubUser(user)
    }
    return(
        <>
        {   error 
            ? <Notification  title="Error" type="error" text="User not found"/> 
            : <Notification  title="Success" type="success" text="User found"/> 
        }
            <InputGroup className="search">
                <input
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="search-user"
                onChange={ e => setUser(e.target.value) }
                />
            
                <InputGroup.Append>
                    <button 
                        onClick={getUserData} 
                        className="search-button"
                        variant="outline-secondary"
                    >
                       <FilePerson /> search
                    </button>
                </InputGroup.Append>
            </InputGroup>
        </>
    )
}

export default SearchUser