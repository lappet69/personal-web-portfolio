import React from 'react'

const Profile = () => {
    return (
        <div className='py-10 min-h-[440px]'>
            <table className='table-auto border-collapse '>
                <tbody className=''>
                    <tr className=''>
                        <td className=' md:text-base border-b border-b-slate-300 py-3'>Fullname</td><td className=' md:text-base border-b border-slate-300'>: Andre Tumpak Marulitua Sinabariba</td>
                    </tr>
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Birthday</td><td className=' md:text-base border-b border-slate-300'>: 19-12-1994</td>
                    </tr>
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Phone</td><td className=' md:text-base border-b border-slate-300'>: 0813 3569 3553</td>
                    </tr>
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Degree</td><td className=' md:text-base border-b border-slate-300'>: Bachelor</td>
                    </tr>
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Freelance</td><td className=' md:text-base border-b border-slate-300'>: Avaiable</td>
                    </tr>
                </tbody>
            </table></div>
    )
}

export default Profile