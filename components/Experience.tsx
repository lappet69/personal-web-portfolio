import React from 'react'

export const expreiences = [
    { id: 1, company: "PT Okanemo Worldwide Indonesia", location: "Jakarta, Indonesia", date: "Sep 2022 - Nov 2022", position: "Junior Backend Developer", descriptionOfJob: ["Design and create REST API for client's requirement", "Create a documentation REST API", "Responsible for conducting positive and negative case tests at each endpoint", "Collaborate with 4 team members"] },
    { id: 2, company: "UD Bunga Laut Tegal", location: "Tegal, Indonesia", date: "Jan 2017 - Des 2018", position: "Administration Purchase", descriptionOfJob: ["Recording 10 fish purchase notes every day", "Creating 10 fish purchase reports every day", "Responsible for matching buyer's notes with the seller."] },
    { id: 3, company: "Queen's Karaoke", location: "Tegal, Indonesia", date: "Jun 2015 - Okt 2015", position: "Waiter", descriptionOfJob: ["Prepare food and drinks for guests", "Set up the karaoke room before use", "Clean up the karaoke room after use", "Reconcile stock items", "Purchase depleted stock items."] },
]

export const organizations = [
    { id: 1, organization: "Turnip Indonesia Organization", location: "Jakarta, Indonesia", date: "Sep 2019 - Dec 2019", position: "Internsip/Web Developer", descriptionOfJob: ["Design and build registration forms for student tutoring using PHP within 1 week.", "Design and create database for student tutoring using MySQL within 1 day", "Responsible for testing the app to 0% error", "Collecting student family data 10 - 20 data per day"] },
    { id: 2, organization: "Taruna Budaya Tegal", location: "Tegal, Indonesia", date: "Feb 2016 - Sep 2017", position: "Audio Mixer", descriptionOfJob: ["Collect and provide 3-5 background music for the stage performance", "Collect sound effects for the stage performance music", "Setting audio before the stage performance", "Maintain audio equipment."] }
]

const Experience = () => {
    return (
        <div className='w-full flex flex-col h-screen py-5'>
            <h2 className='border-b-4 border-slate-300 text-2xl md:text-3xl py-2'>Work Expreience</h2>
            {expreiences && expreiences.map((item) => (
                <div key={item?.id} className='w-full flex flex-col py-3'>
                    <div className=' flex flex-grow flex-col md:flex-row'>
                        <div className='grow flex gap-1 py-1'>
                            <p className='font-bold text-sm md:text-base'>{item?.company}</p>
                            <p className='text-sm' >-</p>
                            <p className=' text-slate-400 text-sm md:text-base'>{item?.location}</p>
                        </div>
                        <div className='flex'>
                            <p className='flex text-sm'>{item?.date}</p>
                        </div>

                    </div>
                    <p className='py-1 italic text-sm md:text-base'>{item?.position}</p>
                    <div className='px-4'>
                        {item.descriptionOfJob.map((el, idx) => (
                            <li className="text-sm md:text-base" key={idx}>{el}</li>
                        ))}
                    </div>
                </div>
            ))
            }

            <h2 className='border-b-4 border-slate-300 text-2xl md:text-3xl pb-2'>Organization Expreience</h2>
            {
                organizations && organizations.map((item) => (
                    <div key={item?.id} className='w-full flex flex-col py-3'>
                        <div className=' flex flex-grow flex-col md:flex-row'>
                            <div className='grow flex gap-1 py-1'>
                                <p className='font-bold text-sm md:text-base'>{item?.organization}</p>
                                <p className='text-sm' >-</p>
                                <p className=' text-slate-400 text-sm md:text-base'>{item?.location}</p>
                            </div>
                            <div className='flex'>
                                <p className='flex text-sm'>{item?.date}</p>
                            </div>

                        </div>
                        <p className='py-1 italic text-sm md:text-base'>{item?.position}</p>
                        <div className='px-4'>
                            {item.descriptionOfJob.map((el, idx) => (
                                <li className="text-sm md:text-base" key={idx}>{el}</li>
                            ))}
                        </div>
                    </div >
                ))
            }
        </div >
    )
}

export default Experience