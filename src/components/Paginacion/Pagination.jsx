import React from 'react';
import "./pagination.css";

const Pagination = ({pokemonList, totalPosts}) => {

  const pageNumbers = [];
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;