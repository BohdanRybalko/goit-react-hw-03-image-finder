import React from 'react';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className="load-more-button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
