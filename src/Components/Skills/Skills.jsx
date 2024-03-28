import { useState } from "react";
import { useEffect } from "react";
import Skill from "./Skill";

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);
    const [showAllSkills, setShowAllSkills] = useState(false);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setSkillsData(data?.user?.skills));
    }, []);

    // skills data filter
    const filteredSkillsData = skillsData?.filter(item => item.enabled);

    // Slice the skills data based on whether "Show More" button is clicked
    const displayedSkills = showAllSkills ? filteredSkillsData : filteredSkillsData?.slice(0, 6);

    return (
        <div id="skills">
            {/* section title */}
            <h2 className="text-3xl md:text-4xl text-center font-bold">Professional skills</h2>
            <p className="text-center text-xl">My <span className="italic">Talent</span></p>

            {/* skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 p-5">
                {displayedSkills?.map(item =>
                    <Skill key={item.id} item={item}></Skill>
                )}
            </div>

            {/* Show More/Show Less button */}
            {filteredSkillsData?.length > 6 && (
                <div className="flex justify-center mt-4">
                    {showAllSkills ? (
                        <button className="bg-primary hover:bg-blue-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 ... btn text-xl text-white mt-5"onClick={() => setShowAllSkills(false)}>Show Less</button>
                    ) : (
                        <button className="bg-primary hover:bg-blue-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 ... btn text-xl text-white mt-5"onClick={() => setShowAllSkills(true)}>Show More</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Skills;
