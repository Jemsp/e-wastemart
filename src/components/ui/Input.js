import React from 'react'

function Input({type, id, placeholder, style, onChange, value, required, min, step }) {
  return (
    <div>
        <input min={min} step={step} type={type} id={id} onChange={onChange} value={value} required={required} class={`${style} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder={placeholder} />
    </div>
  )
}

export default Input