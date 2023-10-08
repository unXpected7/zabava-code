import React from 'react'

export default function ButtonNext({ nextPage}:any) {
    return (
        <div><div
            onClick={nextPage}
            className="relative  text-gray-700 hover:bg-gray-50 cursor-pointer
            ml-3 inline-flex items-center rounded-md border 
            border-gray-300 bg-white px-4 py-2 text-sm font-medium"
        >
            Next
        </div></div>
    )
}
