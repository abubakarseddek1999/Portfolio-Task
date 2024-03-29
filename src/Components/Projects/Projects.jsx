import { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
    const [projectsData, setProjectsData] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAllProjects, setShowAllProjects] = useState(false);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setProjectsData(data?.user?.projects))
    }, []);

    // Function to handle click on project card and open modal
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to toggle showing all projects
    const toggleShowAllProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    return (
        <div>
            {/* section title */}
            <h2 className="text-3xl md:text-4xl text-center font-bold">My Projects</h2>
            <p className="text-center text-xl">My <span className="italic">Work</span></p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projectsData?.slice(0, showAllProjects ? projectsData.length : 6).map(item => (
                    <div data-aos="fade-up"
                    data-aos-duration="1000" key={item.id} className="mb-16 p-10 md:p-5 relative">
                        <div className="rounded-xl bg-base-100 shadow-xl cursor-pointer">
                            <img className="rounded-t-lg w-full object-cover" src={item?.image?.url} alt="project" />
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <p className="card-title">{item?.title}</p>
                                    <button onClick={() => handleProjectClick(item)} className="bg-primary hover:bg-blue-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 ... btn text-xl text-white">More Info<IoMdArrowRoundForward /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Show More/Show Less Button */}
            <div className="text-center mb-16">
                {projectsData?.length > 6 && (
                    <button onClick={toggleShowAllProjects} className="bg-primary hover:bg-blue-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 ... btn text-xl text-white mt-5">
                        {showAllProjects ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center mt-2">
                    <div className="bg-white p-8 m-3 rounded-lg max-w-2xl relative">
                        <div className="flex justify-end">
                            <p className=" btn text-2xl pr-5 cursor-pointer" onClick={closeModal}>X</p>
                        </div>
                        {/* image of project */}
                        <img className="mb-2 rounded-xl" src={selectedProject?.image?.url} alt="" />
                        {/* Project title */}
                        <div className=" mb-2">
                            <h3 className="text-3xl font-bold">{selectedProject?.title}</h3>
                        </div>
                        {/* Project dsc */}
                        <p className="mb-4 text-xl">{selectedProject?.description}</p>
                        {/* Technologies */}
                        <p className="mb-4 text-xl font-bold"><strong>Technologies:</strong> {selectedProject?.techStack?.join(", ")}</p>
                        {/* github and live url */}
                        <div className="flex gap-8 justify-start mb-5">

                            <a className="bg-primary hover:bg-blue-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... btn" href={String(selectedProject?.liveurl)} ><FaGithub className="text-4xl text-white " /></a>

                            <a className="bg-primary hover:bg-blue-950 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... btn" href={String(selectedProject?.liveurl)} ><FaArrowUpRightFromSquare className="text-4xl text-white" /></a>


                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
