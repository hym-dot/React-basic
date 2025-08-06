import React, { useState } from 'react';

const Input = ({ title, placeholder }) => {
    const [value, setValue] = useState('');

    const onClickButton = () => {
        console.log(`입력값은 ${value}`);
    };

    return (
        <div>
            <h2>{title}</h2>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={onClickButton}>Click me</button>
        </div>
    );
};

export default Input;
