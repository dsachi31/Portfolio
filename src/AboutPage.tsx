import * as React from 'react';
import { Box} from '@mui/material';
import './App.css';
import whitebg from '../src/white_bg.jpeg'
const AboutPage = () => {


    return (<Box sx={{
        padding: '120px 60px 20px 60px',
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

            <Box sx={{
                fontSize: '45px',
                padding: '5px 40px 0px 0px',
                fontWeight: 600,
                color: '#401258',
                textAlign: 'center'
            }}>
                Hello, My name is Divya S </Box>

            <Box sx={{ margin: 'auto', padding: '30px 40px 40px 40px', fontSize: '20px', }}>

                <p style={{ lineHeight: '1.8', fontSize: '16px', fontWeight: 400, textAlign: 'left', fontFamily: 'Open Sans, sans-serif', marginBottom: '10px' }}>
                    I’m a Java Full Stack Developer with 2+ years of professional experience in building web applications using java, Spring Boot, React.js, Material UI and MySQL. <br />I enjoy developing scalable REST APIs, creating responsive user interfaces, integrating REST APIs in front end user interface and working with databases to build reliable and efficient applications.
                </p><p style={{ lineHeight: '1.8', fontSize: '16px', fontWeight: 400, textAlign: 'left', fontFamily: 'Open Sans, sans-serif', marginBottom: '10px' }}>
                    I’m passionate about learning new technologies, solving problems, and continuously improving my development skills.<br /> I’m currently looking for an opportunity where I can contribute to real-world projects, grow as a developer and build meaningful software as part of a collaborative team.
                </p>

                <p style={{ paddingTop: '30px' }}>********************</p>

                {/* <ul style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', padding: '10px' }}>
                    <li>Developing scalable and secure RESTful APIs using Java and Spring Boot.</li>

                    <li>Designing and implementing responsive user interfaces using React.js, TypeScript, HTML, CSS, and Material UI.</li>

                    <li>Writing clean, reusable, and maintainable code following industry best practices.</li>

                    <li>Collaborating with cross-functional Agile teams to understand business requirements and deliver high-quality solutions.</li>

                    <li>Integrating frontend applications with backend REST APIs.</li>

                    <li>Working with MySQL database for designing tables.</li>

                    <li>Using Git and GitHub for version control, code reviews, and team collaboration.</li>

                    <li>Debugging, testing, and fixing application issues to improve performance and reliability.</li>

                    <li>Participating in feature development, bug fixing, and application enhancements.</li>

                </ul> */}
                <br />


            </Box>



        </Box>



    </Box>)

}
export default AboutPage;
