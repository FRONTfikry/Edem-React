import { useState, useEffect } from 'react';


function useLocalStorage(key, defaultState) {
    let [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || defaultState)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
        // ? Warning with key
    }, [value, key])


    return [value, setValue]
}


export default useLocalStorage;