import React from 'react'

const GlobalText = ({children, className}) => {
  return (
    <div className={`${className} || font-primary text-slate-900 text-3xl md:text-4xl lg:text-6xl tracking-wide font-bold leading-normal`}>
            {children}
    </div>
  )
}

export default GlobalText