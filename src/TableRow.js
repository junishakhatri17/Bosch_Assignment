import React from 'react';
import './App.css';

const TableRow = ({ selected, id, name, handleSelect }) => {
    console.log(`render TableRow :: ${id} :: ${name}`);
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    );
  }
  
  TableRow.defaultProps = {
    selected: false
  }

export default TableRow;
