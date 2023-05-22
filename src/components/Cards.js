import React from 'react'

function Cards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
{/*Card*/}

<div className='rounded-xl relative'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2'>Through 8/16</p>
       {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-lg'>Order Now</button>*/} 
        <button
        type="button"
        className="rounded bottom-4 absolute ml-2 bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
       Order Now
      </button>

    </div>
    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="/" />

</div>

<div className='rounded-xl relative'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
        <p className='px-2'>Tasty Treats</p>
       {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-lg'>Order Now</button>*/} 
        <button
        type="button"
        className="rounded bottom-4 absolute ml-2 bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
       Order Now
      </button>

    </div>
    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="/" />

</div>

<div className='rounded-xl relative'>
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
        <p className='px-2'>Added Daily</p>
       {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-lg'>Order Now</button>*/} 
        <button
        type="button"
        className="rounded bottom-4 absolute ml-2 bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
       Order Now
      </button>

    </div>
    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1659275799237-cbc057d97e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="/" />

</div>
    </div>
  )
}

export default Cards