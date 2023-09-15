import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Title({title, path}) {
  return (
    <>
      <div className='title-wrap'>
        <h2> {title}</h2>
        <div className='see-all'>
          <Link to={path}>
            <p>See All</p>
            <FiChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Title;
