import React from 'react'
import Link from "next/link";
import { ReactNode } from "react";
const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginUser">Login Regular User</Link>
        </li>
        <li>
          <Link href="/login/loginAdmin">Login Admin</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default HomeLayout