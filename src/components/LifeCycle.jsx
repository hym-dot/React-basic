import React, {use, useEffect, useState} from 'react'

const LifeCycle = () => {

    const [ count, setCount] = useState(0)
    useEffect(()=>{
        if(count>0) {
            console.log()
        }

        console.log('마운트 됨')

        return ()=>{
            console.log('언마운트 됨')
        }

    },[])
  return (
    <div>
        <p>click : {count}</p>

        <button onClick={()=>setCount(prev=>prev+1)}>click!</button>
    </div>
  )
}

export default LifeCycle