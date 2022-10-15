import React, {Component, useState} from 'react';

const App = () => {

    const [ text, setText ] = useState("Wpisz date");

    const handleDateChange = (e) => {
        const value = e.target.value
        fetch(`http://numbersapi.com/${value}/year?json`)
            .then(res => {
                if (res.ok) {
                    return res;
                }
                throw Error()
            })
            .then(res => res.json())
            .then(data => {
                setText("W tym roku " + data.text)
            })
            .catch(err => {
                setText("Jest problem :( " + err)
            })
    }

    return (
        <div>
          <input
          type={'text'}
          onChange={handleDateChange}
          />
          <p>{text}</p>
        </div>
    )
}

export default App;