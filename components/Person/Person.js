import React from 'react';
import './Person.css'
export default (params) => {
    const inputClasses = ['input']

    if (params.phone !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    return <div className="Person">
        <h1>{params.name}</h1>
        <h2>{params.surname}</h2>
        <p>{params.phone}</p>
        <p>{params.address}</p>
        <input
            type='text'
            onChange={params.onChangePhone}
            value={params.phone}
            className={inputClasses.join(' ')}
        />
        <button onClick={params.onDelete}>Delete</button>
    </div>
}