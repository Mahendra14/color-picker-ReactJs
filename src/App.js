import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] =  useState([]);
  
  return( <>
  <section className="container">

  </section>
  <section className="colors">
    Colors will show up here!
  </section>
  </>);
}

export default App
