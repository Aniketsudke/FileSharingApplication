import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FilePrevious = ({SaveFiles, removeFile}) => {
    return (
      <div className='flex items-center gap-2 mt-5 border rounded-md justify-between p-2'>
      <div className='flex items-center p-2'>
        <Image src='/file.png' height={50} width={50} alt='file previous'/>
        <div className='text-left'>
            <h2>{SaveFiles.name}</h2>
            <h2 className='text-[12px] text-gray-400'>{SaveFiles?.type}/{(SaveFiles.size/1024/1024).toFixed(2)}MB</h2>
        </div>
        </div>
        <X className='cursor-pointer' onClick={()=>removeFile()}/>
    </div>
  )
}

export default FilePrevious