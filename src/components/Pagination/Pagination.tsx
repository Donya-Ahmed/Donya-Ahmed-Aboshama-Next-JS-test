import PaginationInterface from '@/Types/Interfaces/PaginationInterface';
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Pagination({arrayOfPages,page,setPage,NUMBER_OF_PAGES}:PaginationInterface) {
  return (
      <div className="flex justify-center mt-6 space-x-2">
        {arrayOfPages.map((item:number) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`px-3 py-1 border rounded-full text-sm ${
              page === item ? "bg-gray-300" : ""
            }`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, NUMBER_OF_PAGES))}
          disabled={page === NUMBER_OF_PAGES}
          className="px-3 py-1 border rounded-full text-sm disabled:opacity-50"
        >
          <MdKeyboardDoubleArrowRight/>
        </button>
      </div>
  )
}
