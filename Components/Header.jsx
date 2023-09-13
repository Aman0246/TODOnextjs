'use client'
import Link from 'next/link'
import { motion } from "framer-motion"
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
  return (
    <nav className='bg-blue-600 h-12 font-light py-2 px-16 flex justify-between items-center'>
        <div className='brand'>
            <h1 className=' font-extrabold text-lg'><Link href="/">TODO APP</Link></h1>
        </div>
      <div>
        <ul className='flex gap-12'>
            <Link href="/"><motion.div whileTap={{scale:0.9}}>Home</motion.div></Link>
            <Link href="/addtask"><motion.div whileTap={{scale:0.9}}>Add Task</motion.div></Link>
            <Link href="/showTasks"><motion.div whileTap={{scale:0.9}}>Show Tasks</motion.div></Link>
        </ul>
      </div>
      <div>
      <ul className='flex space-x-4'>
            <li><a href="/">Login</a></li>
            <li><a href="/">SignUp</a></li>
            <AccountCircleIcon/>
        </ul>
      </div>
    </nav>
  )
}
