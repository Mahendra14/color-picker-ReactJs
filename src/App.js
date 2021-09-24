import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] =  useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello from console");
  }



  return( <>
  <section className="container">
    <h3>Color Generator!</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange = {(e) => setColor(e.target.value)} placeholder="#f15025" />
      <button className="btn" type="submit">submit</button>
    </form>

  </section>
  <section className="colors">
    Colors will show up here!
  </section>
  </>);
}

export default App
