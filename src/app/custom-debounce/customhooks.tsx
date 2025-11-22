"use client"

import { useEffect, useState } from "react";

export const useDebounce = <T,>(searchValue: T, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState<T>();

    useEffect(() => {
        console.log("debounce called");
        const timeOut = setTimeout(() => 
            setDebounceValue(searchValue), delay
        );
        return () => clearTimeout(timeOut);  //it clears previous timout and it remembers last typing
    }, [searchValue])

    return debounceValue
};