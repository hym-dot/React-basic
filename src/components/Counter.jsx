import React, { useRef } from 'react'

const Counter = () => {

    const countRef = useRef(0)

    const increaseCount = () => {
        countRef.current += 1

        console.log(`count : ${countRef.current}`)
    }
    return (
        <div>
            <p>count: {countRef.current}</p>
            <button onClick={increaseCount}>+1</button>
        </div>
    )
}

export default Counter