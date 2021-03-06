import React, { createContext, useContext } from 'react';
import UserStore from './userStore';

export default class Store {
    userStore;

    constructor() {
        this.userStore = new UserStore(this);
        // other sub stores...
    }
}

/* Store helpers */
const StoreContext = createContext();

// custom wrapper to inject our store
export const StoreProvider = ({ children, store }) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

/* Hook to use store in any functional component */
export const useStore = () => useContext(StoreContext);
