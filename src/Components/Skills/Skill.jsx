/* eslint-disable react/prop-types */


const Skill = ({item}) => {
    return (
        <div>
             <div key={item.i} className="flex flex-col gap-5 p-5 rounded-lg m-5 bg-slate-500">
                        <div className="flex justify-between items-center mb-5">
                            <div className="flex justify-center items-center gap-2">
                                {/* logo */}
                                <img className="object-cover w-10 h-10" src={item?.image?.url}alt="" />
                                <p className="text-xl font-bold">{item?.name}</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold"><span className="text-blue-800">{item?.percentage}</span> <span className="text-white">%</span></p>
                            </div>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi deleniti numquam quam ipsa sint fuga repellendus repudiandae tempore possimus!</p>
                        </div>
                        {/* Range of skill */}
                        <div>
                            <input type="range" min={0} max="100" value={item?.percentage} className="range range-xs h-[15px] important range-primary" />
                        </div>

                    </div>
            
        </div>
    );
};

export default Skill;