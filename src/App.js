import { useStore } from './store/store';
import { observer } from 'mobx-react-lite';

// wrap our component with observer
const App = observer(() => {
    const store = useStore();
    // get userStore
    const { userStore } = store;

    const handleChange = (e) => {
        userStore.changeUsername(e.target.value);
    };

    return (
        <>
            <b>Username</b>
            <div>{userStore.user.username}</div>
            <input type="text" onChange={handleChange}/>
            <br/>
            <br/>
            <b>Full name</b>
            <div>{userStore.fullName}</div>
        </>
    );
});

export default App;
