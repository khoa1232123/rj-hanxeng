import React, { useState } from 'react';
import { Icon } from 'antd';

function SearchFeature({ refreshFunction }) {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
    refreshFunction(event.target.value);
  };

  return (
    <div className="searchFeature w-25">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeSearch}
        className="form-control"
      />
      <Icon type="search" />
    </div>
  );
}

export default SearchFeature;
