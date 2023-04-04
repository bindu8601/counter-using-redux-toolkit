import React from 'react'
import { increment,decrement,incrementByAmount } from './redux/counterSlice';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import './style.css'

function App() {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const count = useSelector((state) => state.mycount.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment by 1</button>
      <button onClick={()=>dispatch(decrement())}> Decrement by 1</button>
      <input type='number' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}>Increment by amount</button>
    </div>
  )
}

export default App;
