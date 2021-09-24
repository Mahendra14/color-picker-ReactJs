import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index, hexColor}) => {
  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(",");
  //one more way to chane the rgb other than using the hex directly from the library
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setAlert(false);
    },3000)
    return () => {
      clearInterval(timeout);
    }
  }, [alert])
  return (
    <article className={`color`} style={{backgroundColor : `rgb(${bcg})`}}
    onClick = {() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard!</p>}
    </article>
  );
}

export default SingleColor
