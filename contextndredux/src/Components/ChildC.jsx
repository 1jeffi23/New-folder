import React, { useContext } from 'react'
import { countcontext } from '../Context'

const ChildC = () => {
    const { count, setCount } = useContext(countcontext);
    return (
        <div>

            <br />
            ChildC:count is {count}
            <br />
            <br />
            <button onClick={() => { setCount(count + 1) }}>Increment</button>

        </div>
    )
}

export default ChildC