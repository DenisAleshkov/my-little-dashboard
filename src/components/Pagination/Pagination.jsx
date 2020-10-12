import React from 'react';
import { Pagination } from 'react-bootstrap'
import './Pagination.css'
const PaginationComponent = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let number = 1; number <= Math.ceil(totalRepos / reposPerPage); number++) {
        pageNumbers.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination>{pageNumbers}</Pagination>
    );
};

export default PaginationComponent;