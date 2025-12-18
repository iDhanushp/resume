import React from 'react';

const Resume  = () => {
    return (
        <div className="resume-container">
            <header className="header">
                <h1>John Doe</h1>
                <p>Software Engineer|| John@gmail.com||9191912929</p>
                <p>LinkedIn: linkedin.com/in/johndoe | Location: Bangalore, India</p>
            </header>

            <section className="summary">
                <h2>Professional Summary</h2>
                <p>Results-driven software engineer with 3+ years of experience in web development, specializing in React and modern JavaScript frameworks. Passionate about building scalable applications and solving complex problems.</p>
            </section>
            <section className="education">
                <h2>education</h2>
                <p>bsc - jain university</p>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Frontend Developer</strong> - ABC Tech (2023-2025)<br />
                        Developed and maintained responsive web applications using React, Redux, and REST APIs.
                    </li>
                    <li>
                        <strong>Intern</strong> - XYZ Solutions (2022-2023)<br />
                        Assisted in building internal tools and dashboards for data visualization.
                    </li>
                </ul>
            </section>
            <section className="internship">
                <h2>internship</h2>
                <p>bsc - jain university</p>
            </section>
            <section className="projects">
                <h2>projects</h2>
                <ul>
                    <li>
                        <strong>Hotel Management System</strong> - Built a full-stack hotel management app using Java and React.
                    </li>
                    <li>
                        <strong>Portfolio Website</strong> - Designed and deployed a personal portfolio using React and Netlify.
                    </li>
                </ul>
            </section>
            <section className="skills">
                <h2>skills</h2>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                    <li>reactjs</li>    
                    <li>redux</li>
                    <li>git</li>
                    <li>node.js</li>
                </ul>
            </section>

            <section className="certifications">
                <h2>Certifications</h2>
                <ul>
                    <li>React Developer Certification - Coursera</li>
                    <li>Java Programming - Udemy</li>
                </ul>
            </section>

            <section className="contact">
                <h2>Contact</h2>
                <p>Email: John@gmail.com | Phone: 9191912929</p>
            </section>

        </div>
    );
};

export default Resume;
