import React from 'react'

const About = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-12">
        <h1 className="font-inter font-bold text-[clamp(4rem,10vw,5.5rem)] leading-none tracking-tight text-[#0d0d0d]">
          About Me
        </h1>
        <p className="text-sm font-inter text-gray-500 leading-relaxed pt-1">
          Every project I deliver is a reflection of my commitment to quality,
          designed to inspire and drive success.
        </p>
      </div>
    </main>
  )
}

export default About