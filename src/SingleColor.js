import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index, hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`
  return (
    <article className={`color`} style={{backgroundColor : `rgb(${bcg})`}}>
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
}

export default SingleColor
