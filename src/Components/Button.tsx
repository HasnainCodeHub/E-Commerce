
import React from 'react'
function Button({ name }: { name: string }) {
    return (
        <button className="bg-primaryColor py-3 px-8 rounded-md text-white hover:bg-cyan-600 font-semibold">{name}</button>
    )
}

export default Button