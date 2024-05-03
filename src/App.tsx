import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    function succes(position:any){
        const { longitude, latitude }  = position.coords;
        localStorage.setItem("cord",latitude+','+longitude);
    }
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(succes)
        return (
            <div className="App">
                <header className="App-header">
                    Hello, your coordinates is {localStorage.getItem('cord')}
                </header>
            </div>
        );
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    Goodbye Geo!
                </header>
            </div>
        );
    }

}

export default App;
