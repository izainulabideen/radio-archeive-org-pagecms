import React from 'react'

function Testimonial() {
  return (
    <div className="mx-4 md:mx-10 my-12 px-4 py-16 rounded-xl relative bg-gradient-to-r bg-color2 font-[sans-serif]">
      <div className="absolute inset-0 overflow-hidden">
        {/* <img src="https://readymadeui.com/cardImg.webp" alt="Background Image" className="w-full h-full object-cover opacity-50" /> */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-color1 font-extrabold w-full h-full object-cover opacity-5 text-9xl sm:text-[12rem] md:text-[16rem] min-w-max font-spaceGrotesk -rotate-12">Radio Archive</p>
      </div>

      <div className="relative max-w-3xl mx-auto px-8 z-10 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-6 text-color1">Our collectors and transcribers can be licensed to run on-premises at your own site on your own hardware.</h3>
        <button type="button" className="bg-color1 hover:bg-color4 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl uppercase">CONTACT US FOR SUCCESS</button>
      </div>
    </div>
  )
}

export default Testimonial