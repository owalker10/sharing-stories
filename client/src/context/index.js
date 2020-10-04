import React from 'react'

export const useSessionState = (key, defaultValue) => {
    const [value, setValue] = React.useState(
        JSON.parse(sessionStorage.getItem(key)) || defaultValue
    );
    
    React.useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key,value]);
    
    return [value, setValue];
}