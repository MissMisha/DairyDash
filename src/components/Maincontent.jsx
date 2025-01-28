import React from 'react'

function Maincontent() {
  return (
    
    <section className="w-full mx-auto py-10 bg-gray-50">
        <div className="relative border-t border-gray-200 bg-gray-50">
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-24">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          DairyDash Features
          </h1>
          <p className="mt-2 text-lg font-semibold text-gray-400">
          DairyDash bridges the gap between milkmen and consumers, offering a seamless experience with real-time tracking, secure payments, and personalized delivery options.
          </p>
        </header>
      </div>
    </div>

  <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
    <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <img 
        className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" 
        src="src/images/imgmain1.png" 
        alt="billboard image" 
      />

      <div className="md:w-[50%] w-full bg-gray-100   md:p-4 p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 ">
          Proper Verification
        </h2>
        <p className="text-lg mt-4">
        We prioritize user safety and data integrity. Our platform incorporates robust verification processes to ensure the authenticity of user profiles and the legitimacy of information shared. This includes identity checks, and ongoing monitoring to detect and prevent fraudulent activity.
        </p>
        <div className='my-5'>
        <a href="/milkmanlist" className="rounded-lg  px-3 py-1.5 font-dm text-md text-white transition-transform duration-200 ease-in-out hover:scale-[1.03]"
        style = {{background: "#a8dadc",color:"#24595b"}}>Try Now</a>
        <a href="#" className="rounded-lg mx-2 px-3 py-1.5 font-dm text-md text-[#4c7071] transition-transform duration-200 ease-in-out hover:scale-[1.03]">Learn More</a>
        </div>
      </div>
    </div>

    <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
      <div className="md:w-[50%] w-full bg-gray-100  md:p-4 p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 ">
            Timely Delivery Service
        </h2>
        <p className="text-lg mt-4">
        Our Timely Milk Delivery Service guarantees fresh, high-quality milk delivered right to your doorstep, exactly when you need it. We prioritize punctuality and reliability, ensuring you never run out of this essential staple. With our easy-to-use app, you can customize delivery schedules, choose from a variety of milk options, and enjoy the convenience of hassle-free service.
        </p>
        <div className='my-5'>
        <a href="#" className="rounded-lg  px-3 py-1.5 font-dm text-md text-white transition-transform duration-200 ease-in-out hover:scale-[1.03]"
        style = {{background: "#a8dadc",color:"#24595b"}}>Try Now</a>
        <a href="#" className="rounded-lg mx-2 px-3 py-1.5 font-dm text-md text-[#4c7071] transition-transform duration-200 ease-in-out hover:scale-[1.03]">Learn More</a>
        </div>
      </div>
      <img 
        className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" 
        src="src/images/imgmain2.png" 
        alt="billboard image" 
      />
    </div>
  </div>
</section>

  )
}

export default Maincontent
