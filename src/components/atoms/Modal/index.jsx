import React from 'react'

const Modal = ({visible, onClose, judul, badan}) => {
  const handleOnclose = (e) => {
    if (e.target.id === 'container') onClose(); 
      
  }
  if(!visible) return null

  return (
    <div 
    id='container' 
    onClick={handleOnclose} 
    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

        <div className="bg-white p-2 rounded-lg">
         <p>{badan}</p>
          <h2 className='text-xl font-semibold text-center'>{judul}</h2>
         </div>

    </div>
  )
}

export default Modal