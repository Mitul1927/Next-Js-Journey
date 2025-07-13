import { redirect } from 'next/navigation'
import React from 'react'

const Users = () => {
    redirect("/about");
  return (
    <div>Users</div>
  )
}

export default Users