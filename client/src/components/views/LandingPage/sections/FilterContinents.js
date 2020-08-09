import React, { useState } from 'react';
import { Collapse, Checkbox } from 'antd';
import { continents } from './Datas';
const { Panel } = Collapse;

function FilterContinents({ handleFilters }) {
  const [checked, setChecked] = useState([]);

  const handleCheckBox = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    handleFilters(newChecked);
  };

  const renderCheckBoxList = () =>
    continents.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox onChange={() => handleCheckBox(value._id)}>
          <span className="mr-4">{value.name}</span>
        </Checkbox>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={['0']}>
        <Panel header="Filter by Continents" key="1">
          {renderCheckBoxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default FilterContinents;
