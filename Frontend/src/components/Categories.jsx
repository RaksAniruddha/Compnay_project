import React from 'react'

function Categories({Categorie}) {
    return (
        <div className="flex gap-3 mx-22">
            <p className='font-bold text-xl text-[#8A33FD] rounded-xs'>|</p>
            <p className='font-bold text-2xl'>Categories For {Categorie}</p>
        </div>
        
    )
}

export default Categories