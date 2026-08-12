import { Box } from '@mui/material';
import React from 'react';
import whitebg from '../src/white_bg.jpeg'

import bg_violet from '../src/bg_violet.png'



const ExperinecePage = () => {




    return (


        <Box sx={{

            padding: '80px 60px 120px 60px',
            backgroundImage: `url(${whitebg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <Box sx={{ fontSize: '40px', padding: '15px 20px', fontWeight: 600, color: '#401258', textAlign: 'left' }}> Software Developer</Box>
            <Box sx={{ fontSize: '25px', padding: '5px 20px', fontWeight: 400, color: '#401258', textAlign: 'left' }}> IOSYS Software India Pvt. Ltd.</Box>
            <Box sx={{ fontSize: '20px', padding: '0px 20px', fontWeight: 400, color: '#401258', textAlign: 'left' }}> June 2023 – July 2025</Box>

            <Box sx={{ fontSize: '15px', padding: '10px 20px', fontWeight: 400, color: '#401258', textAlign: 'left' }}>Worked as a Software Developer, contributing to the development and maintenance of web applications using Java, Spring Boot, React.js, and MySQL, Django, python, Mongo DB.

                <ul style={{ lineHeight: "1.3", fontSize: '1px', padding: '10px 20px', fontWeight: 400, color: '#401258', textAlign: 'left' }}>
                    <li style={{ fontSize: '16px' }}>
                        Developed and maintained RESTful APIs using Java and Spring Boot.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Built responsive and reusable user interfaces using React.js, JavaScript, HTML, CSS, and Material UI.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Worked with MySQL for database operations, query optimization, and data management.
                    </li>
                    <li style={{ fontSize: '16px' }}>Developed REST APIs using Django (python), and mongoDB for database.</li>
                    <li style={{ fontSize: '16px' }}>
                        Integrated frontend applications with backend REST APIs to deliver dynamic user experiences.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Implemented business logic, validations, exception handling, and CRUD operations.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Used Hibernate/JPA with Spring Boot for efficient database interaction.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Tested and debugged APIs using Postman and managed source code with Git.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Collaborated with cross-functional team members to develop, test, and deliver application features.
                    </li>

                    <li style={{ fontSize: '16px' }}>
                        Participated in debugging, maintenance, and performance improvements of existing application modules.
                    </li>
                    <li style={{ fontSize: '16px' }}>Participated in Agile sprint planning and code reviews.</li>
                    <li style={{ fontSize: '16px' }}>Fixed production issues and enhanced application stability.</li>
                    <li style={{ fontSize: '16px' }}>Used Git for code versioning.</li>
                </ul>


                <Box sx={{ fontSize: '20px', padding: '10px 10px 0px', fontWeight: 600, color: '#401258', dsiplay: 'flex', textAlign: 'left' }}> Tech Stack : </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        padding: "20px 0",
                        color: "#401258",
                        fontSize: {
                            xs: "14px",
                            sm: "15px",
                            md: "16px",
                            lg: "18px",
                        },
                        fontWeight: 500,
                        lineHeight: 1,
                    }}
                >
                    {[
                        "Java",
                        "Spring Boot",
                        "REST API",
                        "Hibernate",
                        "React.js",
                        "JavaScript",
                        "MySQL",
                        "HTML5",
                        "CSS3",
                        "Material UI",
                        "GitHub",
                        "Postman",
                        "VS Code",
                        "Python",
                        "MongoDB",
                    ].map((tech, index, arr) => (
                        <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {index !== arr.length - 1 && <span>|</span>}
                        </React.Fragment>
                    ))}
                </Box>

            </Box>





        </Box>




    )
}
export default ExperinecePage;