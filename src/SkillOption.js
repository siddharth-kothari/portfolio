import React from 'react'

function SkillOption({img, title}) {
  return (
    <div className='items-center mt-5 mr-auto ml-auto'>
        <img src={img} alt={title} className='h-[95px] w-[95px] lg:h-[105px] lg:w-[105px]'/>
        <h5 className='text-white text-bold text-lg mt-4 text-center font-medium font-sans mr-0 ml-0'>{title}</h5>
    </div>
  )
}

export default SkillOption