import React from 'react';
import apic from "../assets/apic.jpg"; 

const About = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-5'>
        {/* About text on the left */}
        <div className='flex flex-col justify-center p-6 rounded-lg '>
          <p className='text-saffron-dark text-xl font-bold mb-4'>About us</p>
          <p className='text-lg text-gray-700'>
            Welcome to a vibrant space where you can celebrate life’s most cherished moments! Our website invites you to share your favorite food, the places that steal your heart, and the festivals that light up your world. Whether it’s a mouthwatering dish, an unforgettable destination, or a joyous celebration, this platform connects you with others who have similar passions. Immerse yourself in a colorful community of foodies, travelers, and culture enthusiasts, all sharing the things that make life truly extraordinary. Come, inspire and be inspired!
          </p>
        </div>
        
        {/* Image on the right */}
        <div className="w-full h-[50vh] max-h-[400px] bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${apic})` }}>
        </div>
      </div>
    </>
  );
}

export default About;
