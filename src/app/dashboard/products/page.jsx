import Pagination from '@/app/_components/dashboard/pagination/Pagination'
import Search from '@/app/_components/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Style from "@/app/_components/dashboard/Products/product.module.css"

const page = () => {
  return (
    <div className={Style.conatiner}>
      <div className={Style.top}>
        <Search placeholder="Search for Products" />
        <Link href="/dashboard/products/add">
          <button className={Style.addUserButton}>Add New</button>
        </Link>
      </div>
      <table className={Style.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Craeted At</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Style.products}>
                <Image
                  src=""
                  alt=""
                  width={20}
                  height={20}
                  className={Style.productsImage}
                />
               IPHONE
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
            <td>13.02.2020</td>
            <td>72</td>
            <td>Active</td>
            <td>
              <div className={Style.buttons}>
                <Link href="/">
                  <button className={`${Style.button} ${Style.view} `}>
                    View
                  </button>
                  <button className={`${Style.button} ${Style.delete} `}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default page