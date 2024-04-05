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
                <Link className="bg-[#16131a] rounded-lg drop-shadow-[0px_0px_5px_rgba(99,102,241,0.25)] hover:scale-[1.025] hover:drop-shadow-[0_0_7px_rgba(99,102,241,0.5)] transition-all duration-200" href={`/blogs/${item.slug}`} key={item.id}>
                <div className='flex items-center justify-center w-[350px] h-[100px] rounded-lg p-1 gap-x-3'>
                <Image src={item.img} alt="" className='h-10 w-10 rounded-full object-cover -z-49' width={36} height={36} />                    
                <p>{item.title}</p>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategoryList