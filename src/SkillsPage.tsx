import { Box, Tooltip } from '@mui/material'
import bg_violet from '../src/bg_violet.png'
import java from '../src/logos/java_logo-removebg-preview.png'
import docker from '../src/logos/docker_logo-removebg-preview.png'
import eclipse from '../src/logos/eclipse_logo-removebg-preview.png'
import html from '../src/logos/html_logo-removebg-preview.png'
import mongo from '../src/logos/mongo_logo-removebg-preview.png'
import lottie from '../src/logos/lottie_logo-removebg-preview.png'
import mui from '../src/logos/mui_logo-removebg-preview.png'
import mysql from '../src/logos/mysql_logo-removebg-preview.png'
import postman from '../src/logos/postman_logo-removebg-preview.png'


import csslogo from '../src/logos/css_logo-removebg-preview.png'
import git from '../src/logos/git_logo-removebg-preview.png'
import github from '../src/logos/github-removebg-preview.png'
import react from '../src/logos/react-removebg-preview.png'
import spring from '../src/logos/spring_logo-removebg-preview.png'
import sql from '../src/logos/sql_logo-removebg-preview.png'
import vscode from '../src/logos/vscode-removebg-preview.png'
import restapi from '../src/logos/Rest_api_logo-removebg-preview.png'
import javascript from '../src/logos/javascript_logo-removebg-preview.png'
import python from '../src/logos/python.png'
import django from '../src/logos/django.png'


const SkillsPage = () => {

    return (<Box sx={{
        padding: '80px 60px 120px 60px',
        backgroundImage: `url(${bg_violet})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }}>

        <Box sx={{ fontSize: '60px', padding: '30px 50px', fontWeight: 600, color: '#eeeeee' }}> Skills</Box>
        <Box
            sx={{
                padding: '60px',
                borderRadius: '30px',
                // backgroundColor: '#fff',
                boxShadow: '0 8px 30px #fff',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '25px',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            {[
                { image: java, name: "Java" },
                { image: spring, name: "Spring Boot" },
                { image: postman, name: "Postman" },
                { image: git, name: "Git" },
                { image: github, name: "GitHub" },
                { image: sql, name: "SQL" },
                { image: html, name: "HTML5" },
                { image: react, name: "React.js" },
                { image: eclipse, name: "Eclipse" },
                { image: mui, name: "Material UI" },
                { image: csslogo, name: "CSS3" },
                { image: vscode, name: "VS Code" },
                { image: restapi, name: "REST API" },
                { image: mongo, name: "MongoDB" },
                { image: docker, name: "Docker" },
                { image: mysql, name: "MySQL" },
                { image: python, name: "Python" },
                { image: django, name: "Django" },


                { image: lottie, name: "Lottie" },
            ].map((tech) => (
                <Tooltip
                    key={tech.name}
                    title={tech.name}
                    arrow
                    placement="top"
                    slotProps={{
                        tooltip: {
                            sx: {
                                color: "#401258",
                                bgcolor: "#fff",
                                fontSize: "14px",
                                fontWeight: 600,
                                px: 2,
                                py: 1,
                                borderRadius: "10px",
                            },
                        },
                        arrow: {
                            sx: {
                                color: "#fff",
                            },
                        },
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#eeeeee",
                            border: "1px solid #eee",
                            transition: "all .3s ease",

                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: "0 10px 25px #fff",
                            },
                        }}
                    >
                        <img
                            src={tech.image}
                            width="120px"
                            height="120px"
                            alt={tech.name}
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Tooltip>
            ))}
        </Box>

    </Box>)
}
export default SkillsPage