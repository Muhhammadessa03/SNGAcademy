"use client"



import { useState } from 'react';
export default function AdmissionForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, phone,city,date,gender,qualification, course});
  };
    return(


<div className="max-w-md mx-auto p-4 bg-gray-200 rounded-md shadow-md my-10">
  <h2 className="text-lg font-bold mb-4">Admission Form</h2>
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
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Father Name:
            </label>
            <input
              type="text"
              id="father-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Father Name"
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
            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
              City:
            </label>
            <input
              type="City"
              id="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Date of Birth" className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth :
            </label>
            <input
              type="date"
              id="Date of Birth"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date of Birth"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Gender" className="block text-gray-700 text-sm font-bold mb-2">
            Gender :
            </label>
            <input className="w-10" type="radio" id="male" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <label className="w-2/3 text-gray-700 text-sm" htmlFor="male">Male</label>
            <input className="w-10" type="radio" id="female" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <label className="w-2/3 text-gray-700 text-sm" htmlFor="male">Female</label>
            </div>


            <div className="mb-4">
            <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">
            Highest Qualification:
            </label>
            <select
              id="Qualifiction"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Please Select</option>
              <option value="course1">English</option>
              <option value="course2">Mathematics</option>
              <option value="course3">No</option>
            </select>
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
              <option value="">Please Select</option>
              <option value="course1">Under Middle(Under grade 8)</option>
              <option value="course2">Matric / O Levels</option>
              <option value="course3">Intermediate / A Levels</option>
              <option value="course2">Matric / O Levels</option>
              <option value="course3">Undergraducate (Bachelor's) /</option>
              <option value="course3">Graducate (Master's)</option>
              <option value="course3">Post-Graducate (PhD)</option>
            </select>
          </div>

         

          <div className="flex items-center justify-between">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
</div>
        </form>
  
</div>


)
}

