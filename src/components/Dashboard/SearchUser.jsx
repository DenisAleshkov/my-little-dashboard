import React from 'react'
import { GithubContext }  from './../../context/context'
import { InputGroup, FormControl } from 'react-bootstrap'
import { FilePerson } from 'react-bootstrap-icons'

import './SearchUser.css'

const SearchUser = () => {

    const { searchGithubUser } = React.useContext(GithubContext)

    const [user, setUser] = React.useState('')
    const getUserData = () => {
        searchGithubUser(user)
    }
    return(
        <>
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