import React from 'react';
import { Toast } from 'react-bootstrap';
import { GithubContext } from './../context/context';
const Error = () => {

    const { error } = React.useContext(GithubContext);

    const a = error ;

    const [showError, setShowError] = React.useState(a);

    const toggleError = () => setShowError(!showError);
    

    return(
        <>
            <Toast show={showError} onClose={toggleError}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </>
    )
}

export default Error;