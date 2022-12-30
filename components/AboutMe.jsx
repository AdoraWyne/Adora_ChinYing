import React from "react";
import Link from "next/link"

import {MdExpandMore} from "react-icons/md"

const AboutMe = () => {
    return (
        <div id="aboutme" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-white font-logo text-3xl md:text-5xl tracking-wide font-bold">
                    about me
                </h2>

                <div className="shadow-xl shadow-fuchsia-400 my-8 px-8">
                    <p className="text-white py-4 max-w-2xl mx-auto">
                    Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. Venison meatloaf meatball, tail flank frankfurter tenderloin kevin corned beef strip steak bacon drumstick.
                    </p>
                    <p className="text-white py-4 max-w-2xl mx-auto">
                    Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. Venison meatloaf meatball, tail flank frankfurter tenderloin kevin corned beef strip steak bacon drumstick.
                    </p>
                    <p className="text-white py-4 max-w-2xl mx-auto">
                    Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. Venison meatloaf meatball, tail flank frankfurter tenderloin kevin corned beef strip steak bacon drumstick.
                    </p>
                </div>
                
                <div className="flex items-center justify-center gap-10">
                    <Link href='/resume.pdf' download={true}>
                    <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold border rounded-md hover:border-themedPurple hover:scale-110">
                        resume
                        <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMe