import { useState, useEffect } from 'react';


function useLocalStorage(key, defaultState) {
    let [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || defaultState);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue]
}


export default useLocalStorage;