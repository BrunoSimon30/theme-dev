import React from 'react'

export default function Readywear() {
  return (
    <section className="py-16">
    <div className="container mx-auto">
     <div className="space-y-8">
     <div>
        <h2 className="text-4xl font-bold uppercase text-center">
          Ready to wear  
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
    <div
      key={index}
      className="w-[250px] h-[200px] overflow-hidden rounded-lg shadow-md"
    >
      <img
        src={`/img/home/ready/r1.jpg`}
        alt={`image-${index + 1}`}
        className="w-full h-full object-cover"
      />
       {/* <img
        src={`/img/home/ready/r${index + 1}.jpg`}
        alt={`image-${index + 1}`}
        className="w-full h-full object-cover"
      /> */}
    </div>
  ))}
        
        
      </div>
     </div>
    </div>
  </section>
  )
}
