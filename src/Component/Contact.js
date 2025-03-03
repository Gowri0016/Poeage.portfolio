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
    <div>
  <div className="text-1.5xl h-auto md:h-80 mx-4 md:mx-64 mt-10">
  <h1 className="text-3xl md:text-8xl font-extralight hover:text-blue-700 mt-6">Contact</h1>
  <p className="mt-6 md:mt-16 text-sm md:text-base">
    Hi, I hope you're doing well. I am <span className="text-blue-600">Gowri Shankar</span> and I’m a web developer
    and <span className="text-blue-600">I run a company and have successfully completed two projects.</span> I help businesses
    create engaging visuals, user-friendly websites, etc. to stand out and connect with their audience. I'd love the opportunity
    to collaborate with you on your upcoming projects. If you have any design needs or ideas you'd like to explore, feel free to reach out.
  </p>
</div>
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
  </div>
);
}
