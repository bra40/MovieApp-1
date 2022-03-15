import './app.scss';
import React, {useState, useEffect} from 'react';
import UserPage from './Components/UserPage/UserPage';
import VisNetwork from './Components/VisNetwork/VisNetwork';

function App() {

  // used to store and set data that is recieved from flask
  const [data, setData] = useState(0);

    // makes sure the server is running
    useEffect(() => {
        fetch("/movieapp")
        .then(
            res => res.status
        )
        .then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            <div className='app'>
                <VisNetwork/>
                <UserPage/>
            </div>
        </div>
    );
}

export default App;
