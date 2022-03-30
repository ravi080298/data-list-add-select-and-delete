import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [element, setElement] = useState('');
  const [list, setList] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const onChangeValue = (value) => {
    setElement(value);
  };
  const handleAddElement = () => {
    let result = [];
    result.push(...list, element);
    result = result.sort();
    setList(result);
    setElement('');
  };

  const deleteElement = () => {
    let result = list.filter((value, index) => {
      return value !== selectValue;
    });
    setList(result);
  };

  const onSelectValue = (value) => {
    setSelectValue(value);
  };

  const listELement = ['ram', 'raj', 'ravi'];

  const onDragDrop = (value) => {
    console.log(value);
  };

  return (
    <div>
      <input
        type="text"
        value={element}
        onChange={(e) => onChangeValue(e.target.value)}
      />
      <button onClick={() => handleAddElement()}>ADD</button>
      <button onClick={() => deleteElement()}>Delete</button>
      <div>
        {list.map((item) => {
          return (
            <li value={item} onClick={() => onSelectValue(item)}>
              {item}
            </li>
          );
        })}
      </div>

      {listELement.map((value) => {
        return <li onDrag={(value) => onDragDrop(value)}>{value}</li>;
      })}
    </div>
  );
}
