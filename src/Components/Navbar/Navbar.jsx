
const Navbar = () => {
    const navLink = <>

        <a href="#home" >Home</a>
        <a href="#about" >About</a>
        <a href="#project" >My project</a>
        <a href="#skills" >Skills</a>
        <a href="#timeline" >Timeline</a>
        <a href="#testimonials" >Testimonials</a>
        <a href="#contact" >Contact</a>

    </>
    return (
        <div className="bg-base-100 w-full">
            <div className="bg-base-100 navbar fixed z-20  max-w-[1400px]">
                <div className="navbar-start  ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className="flex">
                        <img className="w-[50px] h-[50px] rounded-full" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357683739-tqeav.png" alt="" />
                        <a className="btn btn-ghost text-xl">THE PORTFOLIO</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1">
                        {navLink}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;