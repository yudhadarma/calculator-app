"use client"
import React, { useState } from 'react'

const Calculator:React.FC = () => {
    const [expression, setExpression] = useState("")
    const handleButtonClick = (value:string)=>{
        setExpression((prevExpression)=> prevExpression + value)
    }
    const handleCalculate = () => {
        try {
            setExpression(eval(expression))
        } catch (error) {
            setExpression('Error')
        }
    }
    const handleClear = () => {
        setExpression("")
    }
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='w-96 rounded-xl shadow-xl p-7' style={{ backgroundColor: '#000000' }}>
       <input
       type='text'
       className='w-full mb-4 p-5 text-3xl text-right bg-[#505050] rounded-lg text-white font-bold'
       value={expression}
       readOnly
       />
       {/* <div className='grid grid-cols-4 gap-2'>
        {['7', '8', '9', '/'].map((value, index)=>(
            // <button
            // key={index}
            // className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl'
            // onClick={()=>handleButtonClick(value)}
            // >
            <button
                key={index}
                className='p-4 bg-gray-300 text-#1c1c1c rounded-lg hover:bg-gray-400 text-2xl font-bold'
                onClick={() => handleButtonClick(value)}
            >
                {value}

            </button>
        ))}
        {['4', '5', '6', '*'].map((value, index)=>(
            <button
                key={index}
                className='p-4 bg-gray-300 text-#1c1c1c rounded-lg hover:bg-gray-400 text-2xl font-bold'
                onClick={() => handleButtonClick(value)}
            >
                {value}

            </button>
        ))}
        {['1', '2', '3', '-'].map((value, index)=>(
            <button
            key={index}
            className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl'
            onClick={()=>handleButtonClick(value)}
            >
                {value}

            </button>
        ))}
        {['0', '.', '=', '+'].map((value, index)=>(
            <button
            key={index}
            className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl'
            onClick={()=>value === '=' ? handleCalculate() : handleButtonClick(value)}
            >
                {value}

            </button>
        ))}

       </div> */}
       <div className='grid grid-cols-4 gap-2'>
            {['7', '8', '9', '/'].map((value, index) => (
                <button
                    key={index}
                    className={`p-4 rounded-lg text-2xl font-bold 
                        ${['/', '*', '-', '+', '='].includes(value) ? 'bg-[#f89907] text-white hover:bg-orange-500' : 'bg-gray-300 text-[#1c1c1c] hover:bg-gray-200'}`}
                    onClick={() => handleButtonClick(value)}
                >
                    {value}
                </button>
            ))}
            {['4', '5', '6', '*'].map((value, index) => (
                <button
                    key={index}
                    className={`p-4 rounded-lg text-2xl font-bold 
                        ${['/', '*', '-', '+', '='].includes(value) ? 'bg-[#f89907] text-white hover:bg-orange-500' : 'bg-gray-300 text-[#1c1c1c] hover:bg-gray-200'}`}
                    onClick={() => handleButtonClick(value)}
                >
                    {value}
                </button>
            ))}
            {['1', '2', '3', '-'].map((value, index) => (
                <button
                    key={index}
                    className={`p-4 rounded-lg text-2xl font-bold 
                        ${['/', '*', '-', '+', '='].includes(value) ? 'bg-[#f89907] text-white hover:bg-orange-500' : 'bg-gray-300 text-[#1c1c1c] hover:bg-gray-200'}`}
                    onClick={() => handleButtonClick(value)}
                >
                    {value}
                </button>
            ))}
            {['0', '.', '=', '+'].map((value, index) => (
                <button
                    key={index}
                    className={`p-4 rounded-lg text-2xl font-bold 
                        ${['/', '*', '-', '+', '='].includes(value) ? 'bg-[#f89907] text-white hover:bg-orange-500' : 'bg-gray-300 text-[#1c1c1c] hover:bg-gray-200'}`}
                    onClick={() => value === '=' ? handleCalculate() : handleButtonClick(value)}
                >
                    {value}
                </button>
            ))}
        </div>

       <button
       className='mt-4 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-bold'
       onClick={handleClear}
       >
        Clear
       </button>
        </div>
        </div>
  )
}

export default Calculator