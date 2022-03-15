import './app.scss';
import React, {useState, useEffect} from 'react';
import UserPage from './Components/UserPage/UserPage';

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
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div className='app'>
                   <UserPage/>
                </div>
            )}
        </div>
    );
}

export default App;
