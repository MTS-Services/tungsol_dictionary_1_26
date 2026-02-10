import React from 'react'
import { Word } from './word';

export default function WordList() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4'>
     
        {
            [1,2,4,5].map((item, index) => (
                <Word key={index} />
            ))
        }
    </div>
  )
}

export {WordList};