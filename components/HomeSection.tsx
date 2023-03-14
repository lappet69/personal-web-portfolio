import Education from './Education'
import Experience from './Experience'
import Profile from './Profile'
import Skill from './Skill'

type Props = {
    activeNav: string;
}

const HomeSection = ({ activeNav }: Props) => {
    return (
        <div className='px-8 lg:mx-28 lg:px-24'>
            {activeNav === "skill" && <Skill />}
            {activeNav === "profile" && <Profile />}
            {activeNav === "education" && <Education />}
            {activeNav === "experience" && <Experience />}

        </div>
    )
}

export default HomeSection