import { useState } from 'react'
import './App.css'

function App() {
  const handleOnChange = (e) => {
    const input = e.target.value;
    if (input.toLowerCase().includes('cebolla')) {
      setTimeout(() => {
        alert('Odio la cebolla');
      },50);
    }
  }

  return (
    <>
      <h2>Dislike cebolla</h2>
      <textarea cols="30" rows="10"
        onChange={handleOnChange}
      ></textarea>
    </>
  )
}

export { App }