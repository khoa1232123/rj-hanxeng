import React, { useState } from 'react';
import { Collapse, Radio } from 'antd';
import { price } from './Datas';

const { Panel } = Collapse;

function FilterPrice({ handleFilters }) {
  const [valuePrice, setValuePrice] = useState([]);

  const renderRadioBox = () =>
    price &&
    price.map((value) => (
      <Radio key={value._id} value={value.array}>
        {value.name}
      </Radio>
    ));

  const handleChange = (event) => {
    setValuePrice(event.target.value);
    handleFilters(event.target.value);
  };

  return (
    <div>
      <Collapse defaultActiveKey={['0']}>
        <Panel header="Filter by Price" key="1">
          <Radio.Group onChange={handleChange} value={valuePrice}>
            {renderRadioBox()}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default FilterPrice;
