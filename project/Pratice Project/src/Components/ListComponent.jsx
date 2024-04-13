import React from 'react';

function ListComponent({ data }) {
  return (
    <div className="table-auto">
        <ul>
        {data.map((item, index) => (
          <li key={index} className="p-3 m-3 text-red-400 text-xl">
             {index} : Name: {item.name} , Phone: {item.phoneNo} , Email: {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;

