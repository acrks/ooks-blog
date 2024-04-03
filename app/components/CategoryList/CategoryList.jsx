import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const CategoryList = ({categories}) => {
    if(categories.length == 0) {
        return 
    }

  return (
    <div className='mt-[30px] flex-row justify-start text-left'>
        <h1 className='text-[30px]'><b>Popular Categories</b></h1>
        <div className='flex justify-evenly mt-[50px] gap-x-1'>
            {categories?.map((item) => (
                <Link href={`/blogs/${item.slug}`} key={item.id}>
                <div className='flex items-center justify-center border border-solid border-white w-[350px]  h-[100px] rounded-lg p-1 gap-x-3'>
                <Image src={item.img} alt="" className='h-10 w-10 rounded-full object-cover -z-50' width={36} height={36} />                    
                <p>{item.title}</p>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategoryList