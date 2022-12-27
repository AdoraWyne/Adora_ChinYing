import React, {useState} from "react"
import Link from "next/link"

import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const Navbar = () => {

    const [navigation, setNavigation] = useState(false)

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about me"
        },
        {
            id: 3,
            link: "skills"
        },
        {
            id: 4,
            link: "projects"
        },
        {
            id: 5,
            link: "get in touch"
        }
    ]

    return ( 
    <div className="w-full h-20 z-10 fixed bg-themedPink text-white duration-300 ease-in">
        <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
            <Link href='/#home'>
                <h1 className="font-logo text-3xl lg:text-4xl font-bold tracking-wider">Adora</h1>
            </Link>

            <div>
                <ul className="hidden md:flex">
                    {links.map(({id, link}) => (
                            <Link key={id} href={`/#${link}`}>
                                <li className="ml-10 text-md duration-200 ease-out hover:scale-110">
                                    {link}
                                </li>
                            </Link>
                        ))}
                </ul>
                
                {!navigation && (
                    <div className="md:hidden cursor-pointer" onClick={()=> setNavigation(true)}>
                        <FaBars size={20} />
                    </div>
                )}
            </div>
        </div>

        <div className={navigation ? "md:hidden fixed right-0 top-0 w-full h-full backdrop-blur" : ""}>
            <div className={navigation ? "fixed right-0 top-0 w-4/5 h-full bg-gradient-to-r from-themedPink to-themedPurple text-white p-10 ease-in duration-500" : "fixed right-[-100%] top-0 p-10 h-full ease-in duration-500"}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <div 
                            className="p-3 cursor-pointer" 
                            onClick={() => setNavigation(false)}>
                                <FaTimes size={20} />
                        </div>
                        <Link href="/#home">
                            <h2 className="font-logo text-3xl font-bold tracking-wider">Adora</h2>
                        </Link>
                    </div>
                </div>
                <div className="mt-24 flex flex-col h-fit gap-20">
                    <ul>
                        {links.map(({id, link}) => (

                            <Link key={id} href={`/#${link}`}>
                                <li className="py-4 text-xl tracking-wider">{link}</li>
                            </Link>
                        ))}
                    </ul>
                    <div>
                        <div className="flex items-center justify-around mx-auto w-4/5 gap-10">
                            <div className="flex items-center justify-center rounded-full p-3 cursor-pointer">
                                <FaLinkedin size={35} />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-3 cursor-pointer">
                                <FaGithub size={35} />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-3 cursor-pointer">
                                <FaTwitter size={35} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar