import React from 'react'

const GlobalButton = ({children, className}) => {
  return (
    <button className={className || `sm:w-40 py-2 bg-blue-500 shadow-md hover:shadow-blue-600/50 font-secondary text-white text-base font-medium rounded-full hover:bg-blue-600 transition duration-300 ease-in-out tracking-wider  w-full }`  }>
            {children}
    </button>
  )
}

export default GlobalButton