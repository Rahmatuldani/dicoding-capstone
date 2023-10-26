import React from 'react';

const useInput = (defaultValue = null) => {
    const [value, setValue] = React.useState(defaultValue);

    const handleSetValue = (event) => {
        setValue(event.target.value);
    };

    return [value, handleSetValue];
};

export default useInput;