
import Link from "next/link"
import Card2 from "./Card2";

export default function Silde2(){
    return(
        
      <div className="relative bg-gray-50 px-6 pt-10 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
  
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Updates</h2>
        </div>
        <div className="flex mx-auto mt-12  max-w-sm gap-5 lg:max-w-none lg:grid-cols-3">
        <Card2/>
        </div>
        </div>
        </div>

			
    )
}