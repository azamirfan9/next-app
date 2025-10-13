import Link from 'next/link'
import React from 'react'
import ProductCard from '../components/ProductCard'

const UserPage = () => {
  return (
    <div><h2>UserPage</h2>
        <Link href="/users/new">Users</Link>
        <ProductCard />
    </div>
  )
}

export default UserPage