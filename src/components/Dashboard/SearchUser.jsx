import React from 'react'
import { GithubContext }  from './../../context/context'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import  Loading  from './../../utils/Loading'

const SearchUser = () => {

    const { searchGithubUser, loading } = React.useContext(GithubContext)

    const [user, setUser] = React.useState('')
    const [avatar, setAva] = React.useState('')
    const getUserData = () => {
        searchGithubUser(user)
    }
    return(
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={ e => setUser(e.target.value) }
            />
            <InputGroup.Append>
                <Button onClick={getUserData} variant="outline-secondary">Button</Button>
            </InputGroup.Append>
            {
                loading && <Loading />
            }
            <div><img src={avatar} alt=""/></div>
            
        </InputGroup>
    )
}

export default SearchUser