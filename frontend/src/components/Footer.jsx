import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div className="mt-[-30px]">
            <img src={assets.logo} className=' w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Luxe Cartel is your premier destination for luxury shopping, offering a curated range of high-quality, designer fashion, accessories, and lifestyle pieces. With seamless service and exclusive deals, Luxe Cartel elevates your shopping experience, ensuring every purchase embodies style and sophistication. Indulge in luxury with Luxe Cartel.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+12-34-5678</li>
                <li>contact@luxecartel.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ luxecartel.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
