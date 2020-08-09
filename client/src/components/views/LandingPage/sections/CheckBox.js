import React, { useState } from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

const continents = [
  { _id: 1, name: 'Afica' },
  { _id: 2, name: 'Europe' },
  { _id: 3, name: 'Asia' },
  { _id: 4, name: 'North America' },
  { _id: 5, name: 'South America' },
  { _id: 6, name: 'Australia' },
  { _id: 7, name: 'Antarctica' },
];

function CheckBox({ handleFilters }) {
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
        <Checkbox onChange={() => handleCheckBox(value._id)} />
        <span>{value.name}</span>
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

export default CheckBox;
