import Link from 'next/link'

const Profile = () => {
    return (
        <div className='py-10 min-h-[440px]'>
            <table className='table-auto border-collapse '>
                <tbody className=''>
                    <tr className=''>
                        <td className=' md:text-base border-b border-b-slate-300 py-3'>Fullname</td><td className='text-[14px] md:text-base border-b border-slate-300'>: Andre Tumpak Marulitua Sinabariba</td>
                    </tr>
                    {/* <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Birthday</td><td className=' md:text-base border-b border-slate-300'>: 19-12-1994</td>
                    </tr> */}
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Phone</td><td className=' md:text-base border-b border-slate-300 hover:text-blue-500'>: <Link href="https://api.whatsapp.com/send?phone=6281335693553" target={"_blank"} passHref>0813 3569 3553</Link> </td>
                    </tr>
                    {/* <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Degree</td><td className=' md:text-base border-b border-slate-300'>: Bachelor</td>
                    </tr> */}
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Freelance</td><td className=' md:text-base border-b border-slate-300'>: Avaiable</td>
                    </tr>
                    <tr >
                        <td className=' md:text-base border-b border-slate-300 py-3'>Github</td><td className=' md:text-base border-b border-slate-300 hover:text-blue-500'>: <Link href={"https://github.com/lappet69"} target="_blank" passHref >lappet69</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile