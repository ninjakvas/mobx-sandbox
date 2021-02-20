import React, { createContext, useContext } from 'react';
import UserStore from './userStore';

export default class Store {
    userStore;

    constructor() {
        this.userStore = new UserStore(this);
    }
}

/* Store helpers */
const StoreContext = createContext();

export const StoreProvider = ({ children, store }) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

/* Hook to use store in any functional component */
export const useStore = () => useContext(StoreContext);
