import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import bgImg from '../assets/car wash.jpg'
import card from '../assets/3M_Exterior_Shampoo_9WKaAQSHTy.webp'
function CarWash() {
    return (
        <>
            <div><Navbar /></div>
            <div className="2xl:flex">
                <div>
                    <div className='flex flex-col justify-items-center mx-80 md:items-center w-full ml-2 2xl:my-96 my-14 '>
                        <p className='text-2xl'>Rapid And Clean CarWashing
                        </p>
                        <h1 className='py-3 2xl:ml-40 text-5xl md:text-5xl font-bold 2xl:justify-center '>Commuter Solutions</h1>
                        <p className="text-2xl ">Book a premium Carwash
                            then carwash at your door
                            step</p>
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
            <div className='mt-14 overflow-y: auto;  bg-slate-200'>
                <div>
                    <p className='text-center text-6xl p-32 font-bold'>Premium Materials Used </p>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div className="relative">

                        <img className="md:w-[400px] md:h-80 w-44 h-44 border-solid border-2 border-black content-between rounded-2xl m-10" src={card}></img>
                        <div className='uppercase font-bold absolute sm:top-20 md:left-32 top-1 left-14'>
                            <span>Professional driver</span>
                        </div>
                    </div>
                    <div className="relative">

                        <img className="md:w-[400px] md:h-80 w-44 h-44 border-solid border-2 border-black content-between rounded-2xl m-10" src={card}></img>
                        <div className='uppercase font-bold absolute sm:top-20 md:left-32 top-1 left-14'>
                            <span>Professional driver</span>
                        </div>
                    </div>
                    <div className="relative">

                        <img className="md:w-[400px] md:h-80 w-44 h-44 border-solid border-2 border-black content-between rounded-2xl m-10" src={card}></img>
                        <div className='uppercase font-bold absolute sm:top-20 md:left-32 top-1 left-14'>
                            <span>Professional driver</span>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-50 flex justify-end mb-6 '>
                    <div className='text-5xl font-sans bg-slate-50 text-emerald-600 pt-10'>We Simplifies car ownership</div>
                </div>
            </div>
            <div>
            <div className="font-bold text-3xl text-center p-10">
              <span class='block'>We clean  professionally interior and exterio your car </span>
              <span class="block">at your finger Tips .</span>
              <button> <Link to ='/carwashBook' className='w-[160px] my-5 py-2 bg-black shadow-lg shadow-blue-500/65 hover:shadow-teal-500/40 text-white font-semibold '
      type="submit">Book Now !</Link></button>
              </div>
            </div>
        </>
    )
}

export default CarWash