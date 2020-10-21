import React, { useReducer, createContext, useRef } from 'react'
import chars from '../data/characters'
import { TableOfContents, Meet, Category } from '../components/pages'

export const useSessionState = (key, defaultValue) => {
    let storedValue = null
    const json = sessionStorage.getItem(key)
    if (json !== 'undefined') storedValue = JSON.parse(json)
    const [value, setValue] = React.useState(
        storedValue !== null && storedValue !== undefined ? storedValue : defaultValue
    );
    
    React.useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key,value]);
    
    return [value, setValue];
}



// Not currently in use ///////////////////////////////

const initialState = {
}

const getPage = (name,category) => {
    
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_REF':
            //console.log(action.payload)
            return {
                ...state,
                flipPage: {
                    current: action.payload
                }
            }
        case 'FLIP':
            switch(action.payload){
                case 'prev':
                    state.flipPage.current.gotoPreviousPage()
                    break
                case 'next':
                    state.flipPage.current.gotoNextPage()
                    break
                default:
                    state.flipPage.current.gotoPage(action.payload)
            }
            return state
        case 'GOTO':
            state.flipPage.gotoPage(getPage(action.payload[0],action.payload[1]))

        default:
            return state;
    }
    
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    return (<GlobalContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </GlobalContext.Provider>);
}
