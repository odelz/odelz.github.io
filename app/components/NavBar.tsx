import React from 'react';
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <Link href="/">
            Odelia Huang
          </Link>
        </div>
      </div>
      <div className="nav-links">
          <Link href="/inspiration">
            Inspiration
          </Link>
          <Link href="/portfolio" >
            Portfolio
          </Link>
       
          <Link href="/todolist" >
            To Do
          </Link>
        
          <Link href="/contact" >
            Contact
          </Link>
      </div>
    </div >
  );
}
