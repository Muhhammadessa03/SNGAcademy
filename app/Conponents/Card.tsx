
"use client"


import Link from 'next/link';
import  { useState } from 'react';

export default function Card (){
      
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
 

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', { name, email, phone, course });
};


    return(
        <main className="flex gap-5 flex-wrap mb-5">
        
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white  hover:scale-90  m:flex-grow">
  <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Course Image" className="w-full h-48 object-cover "/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">English Grammar</h2>
    <p className="text-gray-700 text-base">
  Basic English Grammar Course by Sir Abdul Manan Gadani
    </p>
    <div className="flex justify-between mt-4">
      <span className="text-green-500 font-bold"> Rs 0000/</span>
     
      <button type="button" onClick={() => setIsOpen(!isOpen)}  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Enroll Now
      </button>
      
    </div>
  </div>
  <div className="px-6 py-2 border-t border-gray-200">
    <span className="text-gray-600 text-sm">Duration: 6 Months</span>
    <span className="text-gray-600 text-sm ml-2">Level: Beginner</span>
  </div>
</div>


<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white  hover:scale-90">
  <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Course Image" className="w-full h-48 object-cover"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2"> Basic Mathematics</h2>
    <p className="text-gray-700 text-base">
     Basic Mathematics Course by Sir Jahanzeb Ali Gadani
    </p>
    <div className="flex justify-between mt-4">
      <span className="text-green-500 font-bold">Rs 0000/</span>
    
      <button onClick={() => setIsOpen(!isOpen)} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Enroll Now
      </button>
    
      
    </div>
  </div>
  <div className="px-6 py-2 border-t border-gray-200">
    <span className="text-gray-600 text-sm">Duration: 6 Months</span>
    <span className="text-gray-600 text-sm ml-2">Level: Beginner</span>
  </div>
</div>

<div className={`max-w-sm mx-auto bg-gray-700 rounded-lg shadow-lg ${isOpen ? "block" : "hidden"}`}>
             
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold mb-4 text-gray-200 ">Enroll in Our Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block text-gray-700 text-sm font-bold mb-2">
              Select Course:
            </label>
            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Course</option>
              <option value="course1">English</option>
              <option value="course2">Mathematics</option>
              <option value="course3">No</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
             
          
</main>

    )
}