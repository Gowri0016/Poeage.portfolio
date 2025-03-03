import React, { useRef } from 'react'

export default function Define() {

const nameRef = useRef();
const emailRef = useRef();
const messageRef = useRef();

const onDefin = (e) => {
  e.preventDefault();

    alert("Submitted successfully...!");

};

return (
  <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

    <form onSubmit={onDefin}>

      <div className="mb-3">
        <label className="block font-medium">Name:</label>
        <input type="text" ref={nameRef} className="w-full p-2 border rounded"/>
        
      </div>

      <div className="mb-3">
        <label className="block font-medium">Email:</label>
        <input type="email" ref={emailRef} className="w-full p-2 border rounded"/>
        
      </div>

      <div className="mb-3">
        <label className="block font-medium">Message:</label>
        <input type="message" ref={messageRef} className="w-full p-2 border rounded"/>

          </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>

    </form>

  </div>
);
}
