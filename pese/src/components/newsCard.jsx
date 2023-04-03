import React from 'react'
import book from '../assets/book.jpeg'
function NewsCard({ article: { content, urlToImage, author, publishedAt, title, description } }) {

    console.log(content)
    return (
        <div className='shadow-lg w-[300px]  rounded-md relative h-auto'>
            <div>
                <img src={urlToImage} alt='book' className=' rounded' />
            </div>
            <div className='flex gap-5  pt-2 px-2'>
                <p className='text-[0.7em] font-extralight opacity-75'>{author}</p>
                <p className='text-[0.7em] font-extralight opacity-75'>{publishedAt}</p>
            </div>

            <h4 className=' p-2 font-semibold'>{title}</h4>

            <p className='text-sm p-2 mb-2'>{description} <br /><br /><span> <a className='px-4 py-2  bg-gray-500 text-white rounded-lg '>Read More</a>
            </span></p>

        </div>
    )
}

export default NewsCard