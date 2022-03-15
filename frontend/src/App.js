import './App.css';
import React, {useState, useEffect} from 'react';
import UserPage from './Components/UserPage/UserPage';

function App() {

  // used to store and set data that is recieved from flask
  const [data, setData] = useState(0);

    // makes sure the flask backend is up and running
    useEffect(() => {
        fetch("/movieapp")
        .then(
            res => res.status
        )
        .then(
            data => {
                setData(data)
            }
        )
    }, [])

    return (
        <div>
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div>
                    Success!
                </div>
            )}
        </div>
    );
}

export default App;
