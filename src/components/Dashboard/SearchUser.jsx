import React from 'react'
import * as axios from 'axios'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const SearchUser = () => {
    const [user, setUser] = React.useState('')
    const getUserData = async () => {
        const response = axios.get(``)
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
        </InputGroup>
    )
}

export default SearchUser