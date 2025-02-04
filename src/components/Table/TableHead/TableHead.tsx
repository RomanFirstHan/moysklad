import React from 'react'

interface TableHeadProps {
   sortOrderId: 'asc' | 'desc';
   sortOrderName: 'asc' | 'desc';
   sortOrderCount: 'asc' | 'desc';
   handleSort: (tag: 'username' | 'taskCount' | 'userId') => void;
}

export default function TableHead({ sortOrderId, sortOrderName, sortOrderCount, handleSort }: TableHeadProps) {

   return (
      <thead className='h-[32px] text-[12px] max-sm:text-[10px] text-left uppercase text-[#fff]/40 bg-[#fff]/[0.04]'>
         <tr>
            <th className='max-w-[407px] font-[600] text-center'>#
               <button className='ml-[10px]' onClick={() => handleSort('userId')}>
                  {sortOrderId === 'asc' ? '⯆' : '⯅'}
               </button>
            </th>
            <th className='font-[600]'>Username
               <button className='ml-[10px]' onClick={() => handleSort('username')}>
                  {sortOrderName === 'asc' ? '⯆' : '⯅'}
               </button>
            </th>
            <th className='font-[600] whitespace-nowrap max-sm:text-center'>to-do count
               <button className='ml-[10px]' onClick={() => handleSort('taskCount')}>
                  {sortOrderCount === 'asc' ? '⯅' : '⯆'}
               </button>
            </th>
         </tr>
      </thead>
   )
}
