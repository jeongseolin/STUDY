import React from 'react';

function Number(props) {
  const { data } = props;
  return (
    <div>
      {data.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
}

export default Number;
