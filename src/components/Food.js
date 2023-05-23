import React,{useState} from 'react'
import {data} from '../data/Data'
function Food() {
  const [foods, setFoods] = useState(data)
  //console.log(data)

  // Filter Type  burgers/pizza/etc

  const filterType = (category)=>{
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      })
    )
  }

  // Filter by Price

  const filterPrice = (price)=>{
    setFoods(
      data.filter((item)=>{
        return item.price === price;
      })
    )
  }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 '>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button  type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={()=>setFoods(data)}>All</button>
            <button  type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterType('burger')}>Burger</button>
            <button  type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterType('pizza')}>Pizza</button>
            <button  type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterType('salad')}>Salads</button>
            <button  type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterType('chicken')}>Chicken</button>

          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] '>
          <button
        type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterPrice('$')}
      >
       $
      </button>

      <button
        type="button"
        className="rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm m-1 hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterPrice('$$')}
      >
       $$
      </button>

      <button
        type="button"
        className="m-1 rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterPrice("$$$")}
      >
       $$$
      </button>

            <button
        type="button"
        className="rounded-lg m-1 bg-orange-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => filterPrice("$$$$")}
      >
       $$$$
      </button>
           
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {
        foods.map((item, index) => (
          <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg '/>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p >
                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>

        ))
      }
    </div>
    </div>
  )
}

export default Food