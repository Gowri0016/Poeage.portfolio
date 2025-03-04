import React from 'react'

export default function Footer() {
  return (
    <div className="">
           <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-bold">Stay Connected</h2>
                <p className="mt-2">Follow us on our social media channels</p>
                <div className="flex justify-center mt-4">
                    <a href="https://wa.me/917358039616" className="mx-2 text-blue-400 hover:text-blue-600">Whatsapp</a>
                    <a href="https://www.linkedin.com/in/g-gowri-shankar/" className="mx-2 text-blue-400 hover:text-blue-600">Linde in</a>
                    <a href="https://www.instagram.com/poeage_com?igsh=a3lncmZoZ21lZXVl" className="mx-2 text-blue-400 hover:text-blue-600">Instagram</a>
                </div>
                <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}
