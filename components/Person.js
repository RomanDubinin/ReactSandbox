import React from 'react';

export default (params) => {
    return <div>
        <h1>{params.name}</h1>
        <h2>{params.surname}</h2>
        <p>{params.phone}</p>
        <p>{params.address}</p>
    </div>
}