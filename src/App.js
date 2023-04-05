import React from 'react'
import { increment,decrement,incrementByAmount, decrementByAmount } from './redux/counterSlice';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import './style.css'

function App() {
  const [Amount, setAmount] = useState(1);
  const count = useSelector((state) => state.mycount.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment by 1</button>
      <button onClick={()=>dispatch(decrement())}> Decrement by 1</button>
      <input type='number' value={Amount} onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(Number(Amount)))}>Increment by amount</button>
      <button onClick={()=>dispatch(decrementByAmount(Number(Amount)))}>Decrement by amount</button>
    </div>
  )
}

export default App;
