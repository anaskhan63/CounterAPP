import React, { useState } from 'react'

const useStateChallenge = () => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(1);


  return (
    <>
      <div className='flex justify-center items-center min-h-screen p-5 bg-slate-400'>
        <div className="bg-white p-4 rounded-lg">
          <h1 className='text-4xl font-sans font-semibold text-center'>useState Thapa Challenge</h1>
          <h2 className='mt-4 text-2xl text-blue-400'>Count: {count}</h2>
          <label >
            Step:
            <input
              onChange={(e) => setValue(Number(e.target.value))}
              value={value}
              type="text" className='pl-6 ml-4 mt-5 border border-gray-500 ' />
          </label>
          <div className='flex items-center mt-5 gap-5'>
            <button className='px-8 py-3 bg-black rounded text-white mt-5' onClick={() => setCount(count + value)}>Increment</button>
            <button className='px-8 py-3 bg-black rounded text-white mt-5' onClick={() => setCount(count - value>= 0 ? count - value : 0)
            }>Decrement</button>
            <button className='px-8 py-3 bg-black rounded text-white mt-5' onClick={() => setCount(0) || setValue(0)}>Reset</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default useStateChallenge