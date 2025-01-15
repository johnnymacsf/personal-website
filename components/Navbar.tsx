import React from "react";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-5 mb-2 ml-auto">
                <SocialIcon
                    url="https://www.linkedin.com/in/john-gill-2914b3203/"
                    target="_blank"
                    fgColor="#ffffff" 
                    bgColor="transparent"
                    className="border-2 border-white rounded-full p-2 hover:bg-blue-100"
                />
                <SocialIcon
                    url="https://github.com/johnnymacsf"
                    target="_blank"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="border-2 border-white rounded-full p-2 hover:bg-blue-100"
                />
                <SocialIcon
                    url="mailto:johnnydimes17@gmail.com"
                    target="_blank"
                    fgColor="#ffffff"
                    bgColor="transparent"
                    className="border-2 border-white rounded-full p-2 hover:bg-blue-100"
                />
            </div>
        </div>
    );
}

export default Navbar;
