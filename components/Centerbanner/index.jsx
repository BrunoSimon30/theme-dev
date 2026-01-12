import React from 'react'

export default function CenterBannner({banimg}) {
  return (
    <section className='bg-slate-500  '>
        <div className=" ">
            <div className=" ">
            <img src={banimg} alt="banner" className="w-full h-full object-cover" />
            </div>
        </div>
    </section>
  )
}
