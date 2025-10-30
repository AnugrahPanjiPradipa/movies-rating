import React from 'react';

const NumResults = ({ films }) => {
  return (
    <div className="text-amber-50 text-center">
      <p className="m-0">
        Found <strong>{films.length}</strong> results
      </p>
    </div>
  );
};

export default NumResults;
