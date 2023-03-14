import { FaNodeJs } from 'react-icons/fa'
import { SiCss3, SiExpress, SiGoland, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si'

const skills = [
    { id: 1, name: 'HTML', icon: <SiHtml5 />, },
    { id: 2, name: 'CSS', icon: <SiCss3 />, },
    { id: 3, name: 'Javascript', icon: <SiJavascript />, },
    { id: 4, name: 'NodeJs', icon: <FaNodeJs />, },
    { id: 5, name: 'ExpressJs', icon: <SiExpress />, },
    { id: 6, name: 'ReactJs', icon: <SiReact />, },
    { id: 7, name: 'NextJs', icon: <SiNextdotjs />, },
    { id: 8, name: 'PostgreSQL', icon: <SiPostgresql />, },
    { id: 9, name: 'MySQL', icon: <SiMysql />, },
    { id: 10, name: 'MongoDB', icon: <SiMongodb />, },
    { id: 11, name: 'Typescript', icon: <SiTypescript />, },
    { id: 12, name: 'Golang', icon: <SiGoland />, },
    { id: 13, name: 'PHP', icon: <SiPhp />, },
]
const Skill = () => {
    return (
        <div className='p-10 '>
            <h2 className='text-2xl pb-5 text-center tracking-wider md:text-left  '>Skills</h2>
            <div className=' flex md:grid  md:gap-10 md:grid-cols-5 flex-wrap items-center justify-center'>
                {skills.map((sk) => (
                    <div key={sk.id} className='flex  items-center  p-5 gap-2'>
                        <p className='md:text-4xl text-3xl'>{sk.icon}</p>
                        <p className='text-md'>{sk.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill