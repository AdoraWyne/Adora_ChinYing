import React from "react";
import Image from "next/image"

import html from "../public/assets/skills/html-5-240.png"
import css from "../public/assets/skills/css3-240.png"
import javascript from "../public/assets/skills/javascript-240.png"
import typescript from "../public/assets/skills/typescript-240.png"
import python from "../public/assets/skills/python-240.png"
import github from "../public/assets/skills/github-240.png"
import node from "../public/assets/skills/node-js-240.png"
import express from "../public/assets/skills/express-js-240.png"
import reactLogo from "../public/assets/skills/react-native-240.png"
import next from "../public/assets/skills/nextjs.png"
import tailwind from "../public/assets/skills/tailwindcss-240.png"
import bootstrap from "../public/assets/skills/bootstrap-240.png"
import mongodb from "../public/assets/skills/mongodb-240.png"
import postgresql from "../public/assets/skills/postgresql-240.png"
import restAPI from "../public/assets/skills/restAPI-64.png"


const Skills = () => {

    const skills = [
        {
            id: 1,
            title: 'HTML',
            imageSrc: html
        },
        {
            id: 2,
            title: 'CSS',
            imageSrc: css
        },
        {
            id: 3,
            title: 'Javascript',
            imageSrc: javascript
        },
        {
            id: 4,
            title: 'Typescript',
            imageSrc: typescript
        },
        {
            id: 5,
            title: 'Python',
            imageSrc: python
        },
        {
            id: 6,
            title: 'Tailwind',
            imageSrc: tailwind
        },
        {
            id: 7,
            title: 'Bootstrap',
            imageSrc: bootstrap
        },
        {
            id: 8,
            title: 'GitHub',
            imageSrc: github
        },
        {
            id: 9,
            title: 'Node',
            imageSrc: node
        },
        {
            id: 10,
            title: 'Express.js',
            imageSrc: express
        },
        {
            id: 11,
            title: 'React',
            imageSrc: reactLogo
        },
        {
            id: 12,
            title: 'Next',
            imageSrc: next
        },
        {
            id: 13,
            title: 'MongoDB',
            imageSrc: mongodb
        },
        {
            id: 14,
            title: 'PostgreSQL',
            imageSrc: postgresql
        },
        {
            id: 15,
            title: 'Restful API',
            imageSrc: restAPI
        },
    ]

    return (
        <div id="skills" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-white font-logo text-3xl md:text-5xl tracking-wide font-bold my-8">
                    skills
                </h2>
                {/* <p className="text-white py-4 my-8">
                    Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round.
                </p> */}

                <div className="grid sm:grid-cols-4 gap-8">
                    {skills.map(({id, title, imageSrc}) => (
                        <div key={id} className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lightRounded bg-fuchsia-100 rounded-xl hover:scale-105 ease-in duration-300">
                            <Image src={imageSrc} width="64" height="64" alt={title} />
                            <h3 className="">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills