import React, { useEffect, useState } from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

interface User {
   id: number;
   name: string;
   email: string;
}

interface Task {
   userId: number;
}

export default function UserTasksTable() {

   //Версия без SM, вложенность одноуровневая 
   const [users, setUsers] = useState<User[]>([]);
   const [tasks, setTasks] = useState<Task[]>([]);
   const [loading, setLoading] = useState(true);
   const [sortBy, setSortBy] = useState<'username' | 'taskCount' | 'userId'>('userId');
   const [sortOrderName, setSortOrderName] = useState<'asc' | 'desc'>('asc');
   const [sortOrderCount, setSortOrderCount] = useState<'asc' | 'desc'>('asc');
   const [sortOrderId, setSortOrderId] = useState<'asc' | 'desc'>('asc');


   useEffect(() => {
      Promise.all([
         fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()),
         fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
      ])
         .then(([usersData, tasksData]) => {
            setUsers(usersData);
            setTasks(tasksData);
         })
         .finally(() => setLoading(false));
   }, []);

   const load = () => {
      return (
         <div className="flex items-center justify-center h-screen text-center">
            <h1 className='text-white text-5xl font-[600] max-sm:text-3xl'>Грузимся...</h1>
         </div>
      );
   }

   const handleSort = (sortByField: 'username' | 'taskCount' | 'userId') => {
      if (sortByField === 'username') {
         setSortOrderName(sortOrderName === 'asc' ? 'desc' : 'asc');
         setSortBy(sortByField);
      } else if (sortBy === 'taskCount') {
         setSortBy(sortByField);
         setSortOrderCount(sortOrderCount === 'asc' ? 'desc' : 'asc');
      } else {
         setSortBy(sortByField);
         setSortOrderId(sortOrderId === 'asc' ? 'desc' : 'asc');
      }
   };

   const userTaskCount = users.map((user) => ({
      id: user.id,
      username: user.name,
      email: user.email,
      taskCount: tasks.filter((task) => task.userId === user.id).length,
   }));


   const sortedUserTaskCount = userTaskCount.sort((a, b) => {
      if (sortBy === 'username') {
         return sortOrderName === 'asc'
            ? a.username.localeCompare(b.username)
            : b.username.localeCompare(a.username);
      } else if (sortBy === 'taskCount') {
         return sortOrderCount === 'asc' ? a.taskCount - b.taskCount : b.taskCount - a.taskCount;
      } else {
         return sortOrderId === 'asc' ? a.id - b.id : b.id - a.id;
      }
   });

   return (
      <div className='mx-[80px] mt-[81px] max-sm:mx-[40px]'>
         <div className='max-w-[1569px]  mx-auto'>
            <div className='h-screen flex items-stretch justify-stretch flex-col'>
               <div className='my-16 text-white max-sm:my-10'>
                  <h1 className='text-5xl font-[600] max-sm:text-3xl'>User To-Do Table</h1>
                  <p className='text-md my-[16px] text-[#fff]/40 max-sm:text-[12px] max-sm:my-[8px]'>User task table for effective planning.</p>
               </div>
               {loading ? load() : (<div className='flex text-white justify-center items-center font-inter flex-row'>
                  <table className='w-full shadow-[0_0px_0px_1px_rgba(255,255,255,0.1)] rounded-lg' border={1}>
                     <TableHead sortOrderId={sortOrderId} sortOrderName={sortOrderName} sortOrderCount={sortOrderCount} handleSort={handleSort} />
                     <TableBody sortedUserTaskCount={sortedUserTaskCount} />
                  </table>
               </div>)}
            </div>
         </div>
      </div>
   );
}