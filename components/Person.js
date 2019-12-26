import React from 'react';

export default (params) => {
    return <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        padding: '10px',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        borderRadius: '5px',
        width: '400px',
        margin: 'auto'
    }}>
        <h1>{params.name}</h1>
        <h2>{params.surname}</h2>
        <p>{params.phone}</p>
        <p>{params.address}</p>
        <input type='text' onChange={params.onChangePhone} value={params.phone} />
        <button onClick={params.onDelete}>Delete</button>
    </div>
}