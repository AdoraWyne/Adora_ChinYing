import React from "react";
import Link from "next/link"
import {MdExpandMore} from "react-icons/md"

const HomePage = () => {
    return (
        <div id="home" className="h-screen w-full text-center">
            <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
                {/* <h1 className="font-bold text-white text-7xl font-logo">Welcome to my space</h1>
                <p className="text-white text-md max-w-sm mx-auto">
                    I love a little bit of cooking, a little bit of electronic music, a little bit of running and a little bit of coding! 👩🏻‍💻
                </p> */}

                <h1 className="font-bold text-white text-7xl font-logo">Welcome to my space</h1>

                <p className="text-white text-lg max-w-sm mx-auto">
                    Hi, I&apos;m a software engineer based in Melbourne with a passion for building delightful digital experiences.
                </p>

                <Link href='/#getintouch'>
                    <div className="group flex items-center justify-center my-8 bg-fuchsia-100 text-themedPink px-6 py-3 font-bold border rounded-md hover:border-themedPink hover:scale-110 shadow-lightRounded">
                        get in touch<span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                    </div>
                </Link>


                {/* <div className="flex items-center justify-between my-5">
                    <Link href='/#aboutme'>
                        <div className="group flex items-center justify-center m-3 text-white w-50 px-3 py-3 font-bold border rounded-md hover:border-themedPurple hover:scale-110">
                            about me<span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                        </div>
                    </Link>
                    <Link href='/#skills'>
                        <div className="group flex items-center justify-center m-3 text-white w-50 px-3 py-3 font-bold border rounded-md hover:border-themedPurple hover:scale-110">
                            skills
                            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                        </div>
                    </Link>
                    <Link href='/#projects'>
                        <div className="group flex items-center justify-center m-3 text-white w-50 px-3 py-3 font-bold border rounded-md hover:border-themedPurple hover:scale-110">
                            projects
                            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                        </div>
                    </Link>
                    <Link href='/#getintouch'>
                        <div className="group flex items-center justify-center m-3 text-white w-50 px-3 py-3 font-bold border rounded-md hover:border-themedPurple hover:scale-110">
                            get in touch
                            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default HomePage;