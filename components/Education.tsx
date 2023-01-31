import React from 'react'

export const educations = [
    { id: 1, school: "Binar Academy", location: "Jakarta, Indonesia", date: "Nov 2020 - Jun 2021", position: "Certificate in Fullstack Web Development", descriptionOfJob: ["Designing Web API and compiling API Documentation", "Implementing Realtime Database Service(Firebase)", "Implemented Redux and Server SideRendering (SSR)", "Implementing Continuous Integration (CI/CD)"] },
    { id: 2, school: "Universitas Sangga Buana YPKP", location: "Bandung, Indonesia", date: "Feb 2019 - Jun 2020", position: "Bachelor Degree in Informatics Engineering", descriptionOfJob: ["Major in Web Programming", "Minor in Data Mining", "Relevant Coursework : Software Engineering", "Applicable certifications received (MTCNA) and/or computer languages learned (PHP, MySQL)", "Final Project : Analysis Of The Design Of The Laboratory Assistant Selection System Using The Weighted Product Method at Sangga Buana University"] },
    { id: 3, school: "Politeknik Harapan Bersama", location: "Tegal, Indonesia", date: "Sep 2013 - Sep 2016", position: "Associate Degree in Computer Engineering", descriptionOfJob: ["Major in Web Programming", "Minor in Typography", "Relevant Coursework : Software Engineering", "Applicable certifications received (Office Automation) and/or computer languages learned (PHP, MySQL)", "Final Project : Registration Information System at Aisyiyah Clinic Hj. Marfroh"] },
]
const Education = () => {
    return (
        <div className='w-full flex flex-col h-screen py-5'>
            <h2 className='border-b-4 border-slate-300 text-2xl md:text-3xl py-2'>Educations</h2>
            {educations && educations.map((item) => (
                <div key={item?.id} className='w-full flex flex-col py-3'>
                    <div className=' flex flex-grow flex-col md:flex-row'>
                        <div className='grow flex gap-1 py-1'>
                            <p className='font-bold text-sm md:text-base'>{item?.school}</p>
                            <p className='text-sm '>-</p>
                            <p className=' text-slate-400 text-sm md:text-base'>{item?.location}</p>
                        </div>
                        <div className='flex'>
                            <p className='flex text-sm'>{item?.date}</p>
                        </div>

                    </div>
                    <p className='py-1 italic text-sm md:text-base'>{item?.position}</p>
                    <div className='px-4 text-justify'>
                        {item.descriptionOfJob.map((el, idx) => (
                            <li key={idx} className="text-sm md:text-base">{el}</li>
                        ))}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Education