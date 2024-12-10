import React from 'react'
import { useState } from 'react'

export default function counter() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () => {
        setCount(count <= 0 ? 0 : count-1)
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <div>
      <h1>You have Clicked {count} times</h1>
      <button onClick={increaseCount}>Increament</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={decreaseCount}>Decreament</button>
    </div>
  )
}
