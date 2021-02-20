import { makeAutoObservable } from 'mobx';

export default class UserStore {
    rootStore;
    user = {
        id: 1,
        first_name: 'John',
        last_name: 'Smith',
        username: 'username2222'
    };

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    // actions
    changeUsername = (username) => {
        this.user.username = username;
    };

    // computed values
    get fullName() {
        return this.user.first_name + ' ' + this.user.last_name;
    }
}
