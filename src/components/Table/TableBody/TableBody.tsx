import React from 'react'

interface TableHeadProps {
   sortedUserTaskCount: {
      id: number;
      username: string;
      email: string;
      taskCount: number;
   }[]
}

export default function TableBody({ sortedUserTaskCount }: TableHeadProps) {

   return (
      <tbody>
         {sortedUserTaskCount.map(({ id, username, email, taskCount }) => (
            <tr className='h-[80px] font-[500] border-b max-sm:text-[12px] border-[#fff]/10 last:border-none' key={id}>
               <td className='w-[47px] min-w-[37px] text-center'>{id}</td>
               <td>
                  <div className='flex items-center gap-x-[10px] '>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                           <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.04" />
                           <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" stroke-opacity="0.1" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2554 22.8233C24.462 22.4121 24.9628 22.2461 25.3741 22.4527C26.7361 23.1369 27.8875 24.2262 28.7207 25.5685C28.8469 25.7718 29.0307 26.0434 29.0877 26.4114C29.1488 26.8054 29.0419 27.1821 28.8825 27.4686C28.7232 27.7551 28.4595 28.0447 28.0925 28.2006C27.7436 28.3488 27.3641 28.3333 27.0833 28.3333C26.6231 28.3333 26.25 27.9602 26.25 27.5C26.25 27.0398 26.6231 26.6667 27.0833 26.6667C27.2627 26.6667 27.357 26.6661 27.4243 26.6615L27.426 26.6585C27.442 26.6298 27.3209 26.4736 27.3047 26.4475C26.6195 25.3437 25.6904 24.4768 24.6259 23.942C24.2147 23.7355 24.0488 23.2346 24.2554 22.8233Z" fill="white" fill-opacity="0.5" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5871 12.5189C22.7919 12.1068 23.2921 11.9387 23.7042 12.1435C25.2113 12.8925 26.25 14.4492 26.25 16.25C26.25 18.0508 25.2113 19.6075 23.7042 20.3565C23.2921 20.5613 22.7919 20.3932 22.5871 19.9811C22.3823 19.5689 22.5503 19.0687 22.9625 18.8639C23.9249 18.3857 24.5833 17.394 24.5833 16.25C24.5833 15.106 23.9249 14.1143 22.9625 13.6361C22.5503 13.4312 22.3823 12.9311 22.5871 12.5189Z" fill="white" fill-opacity="0.5" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 16.25C13.3333 13.7187 15.3854 11.6667 17.9167 11.6667C20.448 11.6667 22.5 13.7187 22.5 16.25C22.5 18.7813 20.448 20.8333 17.9167 20.8333C15.3854 20.8333 13.3333 18.7813 13.3333 16.25Z" fill="white" fill-opacity="0.5" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9167 21.6667C20.5802 21.6667 22.9613 23.1701 24.4143 25.3501C24.5423 25.5421 24.6788 25.747 24.7742 25.9416C24.8891 26.1759 24.9716 26.4451 24.9523 26.7665C24.9369 27.0229 24.8519 27.2607 24.7508 27.4496C24.6497 27.6384 24.4988 27.841 24.294 27.996C24.0196 28.2035 23.7238 28.2762 23.4624 28.3067C23.2322 28.3334 22.9596 28.3334 22.685 28.3333C19.5073 28.3327 16.3273 28.3327 13.1484 28.3333C12.8738 28.3334 12.6012 28.3334 12.371 28.3067C12.1095 28.2762 11.8138 28.2035 11.5394 27.996C11.3345 27.841 11.1837 27.6384 11.0826 27.4496C10.9815 27.2607 10.8964 27.0229 10.881 26.7665C10.8617 26.4451 10.9442 26.1759 11.0591 25.9416C11.1546 25.747 11.2911 25.5421 11.4191 25.3501C12.8721 23.1701 15.2532 21.6667 17.9167 21.6667Z" fill="white" fill-opacity="0.5" />
                        </svg>
                     </div>
                     <div className='flex flex-col gap-y-[4px]'>
                        <div>{username}</div>
                        <div className='text-[12px] text-[#fff]/40 '>{email}</div>
                     </div>
                  </div>
               </td>
               <td className='w-[168px] min-w-[86px] max-sm:text-center'>{taskCount}</td>
            </tr>
         ))}
      </tbody>
   )
}
