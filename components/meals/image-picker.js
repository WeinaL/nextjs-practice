'use client';
import classes from './image-picker.module.css';
import { useRef } from 'react';

export default function ImagePicker({label, name}) {
  const imageInput = useRef();

  function handleImageUpload(event) {
    imageInput.current.click();
  }


return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}></div>
      <input
        className={classes.input}
        type = "file"
        id={name}
        name={name}
        ref={imageInput}
        accept="image/*">
      </input>
      <button className={classes.button} type='button' onClick={handleImageUpload}>Upload</button>
 

    </div>
  );
}   