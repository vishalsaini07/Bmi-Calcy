import './App.css';
import React, { useState } from 'react';

function App() {

  let [weight, setWeight] = useState();
  let [height, setHeight] = useState();
  let [bmi, setBmi] = useState();
  let [message, setMessage] = useState();
  let calcBmi = (e) => {
    e.preventDefault()
    if (height === 0 || weight === 0) {
      alert("Please Enter The Correct Value")
    }
    else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      //

      if (bmi < 25) {
        setMessage("you are underweight")
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a heavy weight")
      }
      else {
        setMessage("you are overweight")
      }

    }
  }

    let reload = () => {
      window.location.reload()
    }

    return (
      <div className="App">
        <div className="container">
          <h2>BMI CALCULATOR</h2>
          <form onSubmit={calcBmi}> 

            <div>
              <label>Weight(ibs)</label>
              <input type="text" placeholder="Enter Weight Value" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label>Height(in)</label>
              <input type="text" placeholder="Enter Hight Value" value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
            </div>

            <div className="center">
              <h3>Your BMI is : {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    );
  
  
}
  export default App;
