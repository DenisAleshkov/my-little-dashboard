import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const SearchUser = () => {
    const [user, setUser] = React.useState('')
    const [ava, setAva] = React.useState('')
    const getUserData = async (event) => {
        let githubResponse = await fetch(`https://api.github.com/users/${user}`)
        let githubUser = await githubResponse.json()
        setAva(githubUser.avatar_url)
        console.log(githubUser)
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
            {user}
            <img src={ava} alt=""/>
        </InputGroup>
    )
}

export default SearchUser