import { useState } from "react";
import { useEffect } from "react";
import Skill from "./Skill";


const Skills = () => {
    const [SkillsData, setSkillsData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setSkillsData(data?.user?.skills))
    }, [])

    // skills data filter
    const filteredSkillsData = SkillsData?.filter(item => item.enabled)

    return (
        <div id="skills">
            {/* section title */}
            <h2 className="text-3xl md:text-4xl text-center font-bold">Professtional skills</h2>
            <p className="text-center text-xl">My <span className="italic">Talent</span></p>

            {/* skills */}
            <div className="grid grid-cols-2 md:grid-cols-3">
                {filteredSkillsData?.map(item =>
                   <Skill key={item.i} item={item}></Skill>
                )}
            </div>
        </div>
    );
};

export default Skills;