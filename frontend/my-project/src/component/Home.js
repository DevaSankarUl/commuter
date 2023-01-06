import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import bgImg from '../assets/cityDriver.webp'
import card from '../assets/car-steering-wheel-logo.webp'
import card2 from '../assets/Carwash.jpg'
function Home() {
  const navigate=useNavigate()
  const handler =()=>{
    navigate('/pickAndDrop')
  }
  const handle =()=>{
    navigate('/carwash  ')
  }
  return (
              <>
              <div className="2xl:flex ">
      <div>
        <div className='flex flex-col justify-items-center sm:items-center w-full ml-2 2xl:my-96 my-14 '>
          <p className='text-2xl'>Hire Your 5 star Drivers</p>
          <h1 className='py-3 2xl:ml-40 text-5xl md:text-5xl font-bold 2xl:justify-center '>Commuter Solutions</h1>
          <p className="text-2xl ">This is our Service brand</p>
        </div>
      </div>
      <div>
        <img className="w-full h-full object-cover " src={bgImg} alt=''></img>
      </div>

    </div><div>
        <div className='flex justify-center mt-20'>
          <p className="text-5xl">Hire professional drivers, and all car Services
            at your finger tip .</p>
            
        </div>
        </div>
        <div className='flex justify-center text font-bold text-6xl mt-20 text-teal-600  mb-16  '>SERVICES </div>
        <div className='card'>
        {/* <div className="flex justify-centercols-2 gap-4 absolute py-8 justify-items-center bg-zinc-200 border"> */}
        {/* <div className="card  ">
        
        <img className="w-[400px] border-solid border-2 border-black flex justify-item content-evenly rounded-sm" src={card}></img>
        
         </div>
        
        <div className="card  ">
        <img className="w-[400px] border-solid border-2 border-black flex justify-item content-evenly rounded-md" src={card2}></img>  
       </div> */}

       <div className="relative">
        <img className="md:w-[400px] md:h-80 w-44 h-44 cursor-pointer  border-solid border-2 border-black content-between rounded-s m-10" onClick={handler} src={card}></img>
        <div className='uppercase font-bold absolute sm:top-20 md:left-48 top-14 left-10'>
          <span>Professional driver</span>
        </div>
         </div>
        
        <div className="relative">
        <img className="md:w-[400px] md:h-80 w-44 h-44 cursor-pointer border-solid border-2 border-black content-evenly rounded-md m-10" onClick={handle} src={card2}></img>  
        <div className='uppercase font-bold absolute xm:top-10 md:left-48 top-20 left-20'>
          <span>Car Wash</span>
        </div>
       </div>
       
      </div>
      <div className='bg-slate-50 flex justify-end mb-6 '>
      <div className='text-5xl font-sans bg-slate-50 text-emerald-600'>We Simplifies car ownership</div>
      </div>
             <div className="font-bold text-3xl text-center">
              <span class='block'>Hire professional Drivers and car wash </span>
              <span class="block">at your finger Tips .</span>
              <button> <Link to ='/PickDropForm' className='w-[160px] my-5 py-2 bg-black shadow-lg shadow-blue-500/65 hover:shadow-teal-500/40 text-white font-semibold '
      type="submit">Book Now !</Link></button>
              </div>

              <footer>
                
              </footer>
            

      
      {/* <div className='flex justify-center text-black-5xl '>
       <span>Hire Profesional drivers, and all</span> 
        <span className='block'>Car Services .</span>
        <span>at your finger tips</span>
        <button > </button>
      </div> */}
      
      </>


  )
}
export default Home

