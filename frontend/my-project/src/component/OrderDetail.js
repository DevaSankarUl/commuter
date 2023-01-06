import React, { useState } from "react";
import Navbar from '../component/Navbar'
function OrderDetail() {
  const [general, setGeneral] = useState(0);
  console.log(general);
  return (
    <div>
      <div><Navbar/></div>
      <div className="flex justify-center items-center pt-10 ">
        <h1 className=" text-center text-white text-lg bg-gray-700 h-12 w-48 rounded pt-2 font-semibold cursor-not-allowed ">
          Order Details 
        </h1>
      </div>
      <div className="flex justify-center gap-2 p-4 border-double border-emerald-500 border-4 flex-wrap mt-10 ">
        <div
          className="p-4 ml-4 text-black bg-cyan-600 rounded font-semibold cursor-pointer hover:bg-cyan-900"
          onClick={() => setGeneral(0)}
        >
          Pick 
        </div>
        <div
          className="p-4 ml-4 text-black bg-lightGreen rounded font-semibold cursor-pointer hover:bg-green-800"
          onClick={() => setGeneral(1)}
        >
          Drop
        </div>
        <div
          className="p-4 ml-4 text-black bg-emerald-500  rounded font-semibold cursor-pointer hover:bg-emerald-700"
          onClick={() => setGeneral(2)}
        >
          cancel
        </div>
      </div>

      {general == 0 ? (
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg">
            <div className="flex flex-col md:flex-row">Firstpage
                {/* <img
                  className="object-contain w-full h-full "
                  // src={cGeneral}
                  alt="img"
                /> */}
              </div>
              {/* <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  
                </div>
              </div> */}
            
          </div>
        </div>
      ) : general == 1 ? (
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg">
            <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">secondPage 
                {/* <img
                  className="object-contain w-full h-full"
                  // src={cNew}
                  alt="img"
                /> */}
              </div>
              {/* <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg ">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">ThirdPage 
                {/* <img
                  className="object-contain w-full h-full"
                  // src={cRemodel}
                  alt="img"
                /> */}
              </div>
              {/* <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetail;
