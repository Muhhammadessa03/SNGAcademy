import Link from "next/link";

export default function HeroSection(){
    return(
      
      <main className="flex pt-12 px-6 md:px-20 bg-gray-200  items-center justify-center bg-hero-600 md:h-screen overflow-hidden">
      <div className="flex flex-col  gap-10 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
              <h1 className=" text-3xl lg:text-4xl text-center md:text-left text-blue-900 leading-tight font-bold font-lg"> Shaheed Nasrullah Gadani Academy </h1>
             
              <div className="flex justify-center ">
                
      <Link href="/Apply"> <button className="bg-blue-700 text-white  mt-10 rounded w-96 px-6 py-3 text-sm font-bold  tracking-wide">
  Apply</button>
</Link> 
</div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src="/Nasrullah.png"/>
          </div>
      </div>
  </main>

    )
}