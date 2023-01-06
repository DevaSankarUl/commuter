import React, { Fragment } from 'react'

const PickDrop=()=> {
  return (
    <>  
    <div className='h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center overflow-hidden'>
    <div className=' flex justify-center'>
    <form class="w-full max-w-lg border-8  border-gray-500/75 rounded box-border  p-20 bg-emerald-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-center font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Pick And Drop
  
    <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      </label>
      <div class="relative">
        <select class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 mx-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
          <option>Trivandrum</option>
          <option>Kollam</option>
          <option>Texas</option>
          <option>Ernakulam</option>
          <option> kottayam</option>
           <option> Trissur</option>

        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
     

    </div>
  </div>
   
 
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 mx-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Destination Location"/>

    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
   
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
       Car Type
      </label>
      <div class="relative">
      <select class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 mx-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">   
          <option>AMT</option>
          <option>Manual</option>
          <option>DCT</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
 
  </div>
  <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="date"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="time"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <button className='w-full my-5 py-2 bg-zinc-500 shadow-lg shadow-blue-500/65 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
              type="submit">LogIn</button>
</form>
</div>
</div>
</>
  )
}

export default PickDrop