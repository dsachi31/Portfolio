import * as React from 'react';
import { Box, Grid } from '@mui/material';
import './App.css';
import whitebg from '../src/white_bg.jpeg'
const AboutPage = () => {


    return (<Box sx={{
        padding: '20px 60px',
        backgroundImage: `url(${whitebg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }}>

        <Box sx={{
            padding: {
                xs: '25px',
                sm: '30px',
                md: '30px 40px',
                lg: '30px 60px'
            },

        }}>
            <Box sx={{ margin: 'auto', padding: '20px 40px', fontSize: '20px', }}>KNOW ME MORE</Box>
            ***************************
            <Box sx={{
                fontSize: '45px',
                padding: '20px 40px 0px 0px',
                fontWeight: 600,
                color: '#401258'
            }}>
                Hello, My name is Divya S </Box>

            <Box sx={{ margin: 'auto', padding: '0px 40px 40px 40px', fontSize: '20px', }}>

                <p style={{ textAlign: 'left', fontFamily: 'sans serif', marginBottom: '10px' }}>
                    I am a Software Developer with 2+ years of professional hands-on experience in designing, developing, and maintaining web applications.
                    I have worked on backend development using Java 8/17, Spring Boot 3.2, REST APIs, and MySQL.
                    I also have experience in frontend development using React.js, TypeScript, HTML, CSS, and Material UI to build responsive user interfaces.
                </p>

                <p style={{ paddingTop: '20px' }}><strong>I worked on : </strong></p>

                <ul style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', padding: '10px' }}>
                    <li>Developing scalable and secure RESTful APIs using Java and Spring Boot.</li>

                    <li>Designing and implementing responsive user interfaces using React.js, TypeScript, HTML, CSS, and Material UI.</li>

                    <li>Writing clean, reusable, and maintainable code following industry best practices.</li>

                    <li>Collaborating with cross-functional Agile teams to understand business requirements and deliver high-quality solutions.</li>

                    <li>Integrating frontend applications with backend REST APIs.</li>

                    <li>Working with MySQL database for designing tables.</li>

                    <li>Using Git and GitHub for version control, code reviews, and team collaboration.</li>

                    <li>Debugging, testing, and fixing application issues to improve performance and reliability.</li>

                    <li>Participating in feature development, bug fixing, and application enhancements.</li>

                </ul>
                <br />


            </Box>



        </Box>



    </Box>)

}
export default AboutPage;