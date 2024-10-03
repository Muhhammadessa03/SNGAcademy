"use client"
import { useState } from "react";

export default function ResultCheck(){
  const [rollNumber, setRollNumber] = useState('');
  const [examType, setExamaType] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { rollNumber, examType});
  };
    return(



<div className="max-w-md mx-auto p-4 bg-gray-200 rounded-md shadow-md my-10">
  <h2 className="text-lg font-bold mb-4">Result Check Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >Roll Number:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rollNumber" type="text" placeholder="Enter your roll number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >Exam Type:</label>
      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="examType" value={examType}  onChange={(e) => setExamaType(e.target.value)}>
        <option value="">Select Exam Type</option>
        <option value="midterm">Weekly</option>
        <option value="final">Monthly</option>
        <option value="final">Midterm</option>
        <option value="final">Final</option>
      </select>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Check Result</button>
    </div>
  </form>
</div>

)}