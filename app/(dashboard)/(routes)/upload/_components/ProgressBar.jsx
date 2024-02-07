import React from 'react'

const ProgressBar = ({progress}) => {
    console.log('Upload is ' + progress + '% done');
  return (
    <div className='bg-gray-400 w-full h-4 mt-3 rounded-full text-primary'>
        <div className="p-1 bg-primary h-4 rounded-full text-[10px]"
    style={{width:`${progress}%`}}>
    </div>
        {`${Number(progress).toFixed(0)}%`}
    </div>
  )
}

export default ProgressBar