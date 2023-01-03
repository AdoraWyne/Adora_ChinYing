import React from "react";
import Image from "next/image"
import Link from "next/link"

import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from "react-icons/fa"

const GetInTouch = () => {

    return (
        <div id="getintouch" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-white font-logo text-3xl md:text-5xl tracking-wide font-bold my-8">
                    get in touch
                </h2>

                <p className="py-5 text-white"></p>

                <div className="grid sm:grid-cols-4 gap-8">
                    <Link href="https://www.linkedin.com/in/adora-chinying-kong/" target="_blank">
                        <div className="text-themedPink flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around p-6 shadow-lightRounded bg-fuchsia-100 rounded-xl hover:scale-105 ease-in duration-300">
                            <FaLinkedin size={35} />
                            <h3>LinkedIn</h3>
                        </div>
                    </Link>

                    <Link href="https://github.com/AdoraWyne" target="_blank">
                        <div className="text-themedPink flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around p-6 shadow-lightRounded bg-fuchsia-100 rounded-xl hover:scale-105 ease-in duration-300">
                            <FaGithub size={35} />
                            <h3>Github</h3>
                        </div>
                    </Link>

                    <Link href="https://twitter.com/CodeYing" target="_blank">
                        <div className="text-themedPink flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around p-6 shadow-lightRounded bg-fuchsia-100 rounded-xl hover:scale-105 ease-in duration-300">
                            <FaTwitter size={35} />
                            <h3>Twitter</h3>
                        </div>
                    </Link>

                    <Link href="mailto:chinying.kong12@gmail.com" target="_blank">
                        <div className="text-themedPink flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around p-6 shadow-lightRounded bg-fuchsia-100 rounded-xl hover:scale-105 ease-in duration-300">
                            <FaEnvelope size={35} />
                            <h3>Email</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch