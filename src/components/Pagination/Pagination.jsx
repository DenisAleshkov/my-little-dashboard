import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

const PaginationComponent = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>

                        <LinkContainer to={number}>
                            <Button 
                            onClick={() => paginate(number)} 
                            className='page-link' 
                            eventKey={number}
                            > {number}</Button>
                        </LinkContainer>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationComponent;