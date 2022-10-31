import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

const Search=({ handleSearchNote }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em'/>
      <input onChange={(ev) => handleSearchNote(ev.target.value)} type='text' placeholder='Search for your notes...'
        style={{paddingTop: '15px', paddingBottom: '15px'}}/>
    </div>
  );
};

Search.propTypes = {
  handleSearchNote: PropTypes.func
};
export default Search;