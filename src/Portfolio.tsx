
import Zoom from "@mui/material/Zoom";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, CardContent, Chip, Fab, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LeetCodeIcon from '../src/leetcodeIcon.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Popover } from '@mui/material';
import * as React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Button from '@mui/material/Button';

import DownloadIcon from '@mui/icons-material/Download';
import profile from '../src/profile1.png';
import bg1 from '../src/bg2.png'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import whitebg from '../src/white_bg.jpeg'


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
import python from '../src/logos/python.png'
import django from '../src/logos/django.png'


import leetcode from '../src/leetcodeIcon.png'
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";


import {

    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function Portfolio() {


    const headStyle = {
        textTransform: 'none', color: '#fff', fontSize: '17px', '&:hover': { textDecoration: "underline", }

    }

    const [professionalPlatform, setProfessionalPlatform] = React.useState(0)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = (event: any, reason: any) => {
        if (reason === "backdropClick") {
            return;
        }
        setOpen(false);
    };



    const handleClose = () => {
        setOpen(false);
    };
    const downloadPdf = () => {
        const pdfUrl = "/Divya_S_updated_CV.pdf"; // from public folder
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Divya_S_updated_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClick = () => {
        window.open("mailto:dsachi31@gmail.com");
    };

    const gotoLinkedIn = () => {
        window.open("https://www.linkedin.com/in/divya-s-23b390193/", "_blank");
    }

    const gotoGithub = () => {
        window.open("https://github.com/dsachi31?tab=repositories", "_blank");
    }

    const gotoLeetCode = () => {
        window.open("https://leetcode.com/u/Divya_S_31/", "_blank");
    }


    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [id, setId] = React.useState(0)
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setAnchorEl(event.currentTarget);
        setId(id)
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setId(0)
    };

    const openPopup = Boolean(anchorEl);
    const scrollToTop = () => {
        const duration = 1500; // 1.5 seconds
        const start = window.scrollY;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            window.scrollTo(0, start * (1 - progress));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    const professionalProjects = [
        {
            title: "Prior Auth Management System",
            duration: "Nov 2024 – Jul 2025",
            description:
                "Developed backend REST APIs and responsive frontend modules for healthcare authorization workflows. Worked on importing large datasets into MySQL and supporting end-to-end authorization processes.",
            tech: ["Java", "Spring Boot", "React.js", "MySQL", "Docker"],
        },
        {
            title: "HR Management System",
            duration: "Jan 2024 – Oct 2024",
            description:
                "Developed interview scheduling, resume processing, and AI-assisted document analysis modules. Built REST APIs and integrated responsive frontend user interface using below tech stacks",
            tech: ["java Spring Boot", "React.js", "MySQL", "Django Python"],
        },
        {
            title: "Drug Visualization System",
            duration: "Jun 2023 –   Dec 2023",
            description:
                "Developed drug visualization dashboards and backend modules for cancer drug research by categorising both Intravenous and Non-Intravenous medications, improving data representation and user interaction.",
            tech: ["Java", "Spring Boot", "React.js", "D3.js", "Typescript"],
        },
    ];

    const personalProjects = [
        {
            title: "Portfolio Website",
            description:
                "Designed and developed a responsive portfolio website to showcase my experience, skills, and projects along with my resume attached for any update please contact for the below details provided.",
            tech: ["React.js", "Typescript", "HTML5", "CSS3", "Material UI"],

            github: "https://github.com/dsachi31/Portfolio",
        },
        {
            title: "Predefined User Chatbot",
            description:
                "Developed a chatbot capable of answering predefined queries with an interactive User Interface (UI) for the already defined answers recorded using below tech stacks. ",
            tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
            demo: "https://dsachiwfmchatbot.netlify.app/",
            github: "https://github.com/dsachi31/chatbot",
        },
        {
            title: "Tech Development",
            description:
                "Developed a responsive web application that showcases various software development technologies, programming concepts, and learning resources. Designed an intuitive interface to help users explore technical topics with a clean and user-friendly experience.",
            tech: [
                "React.js",
                "Typescript",
                "Material UI",
                "HTML5",
                "CSS3",
            ],
            demo: "https://stellular-crepe-b02f98.netlify.app/",
            github: "#",

        },
        {
            title: "Anime Website",
            description:
                "Built a responsive anime browsing website with a modern UI and API integration by taking random anime api from Rapid API Platform.",
            tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Rapid API"],
            demo: "https://tranquil-longma-eceb3f.netlify.app/",
            github: "https://github.com/dsachi31/Divya_Animes",
        },

        {
            title: "Money Wheels",
            description:
                "Vehicle marketplace application for buying, selling, leasing, and renting vehicles with REST APIs and database integration.",
            tech: [
                "Java",
                "Spring Boot",
                "Hibernate",
                "React.js",
                "MySQL",
            ],
            github: "https://github.com/dsachi31/Money-Wheels"
        },
    ];

    const [activeSection, setActiveSection] = React.useState("home");

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
            ];

            let current = "home";

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (element) {
                    const top = element.offsetTop - 120;

                    if (window.scrollY >= top) {
                        current = section;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navStyle = (section: string) => ({
        textTransform: "none",
        fontSize: "17px",
        color: activeSection === section ? "#6a1b9a" : "#eeeeee",
        background:
            activeSection === section ? "#eeeeee" : "transparent",
        borderRadius: "25px",
        px: 2,
        transition: ".3s",

        "&:hover": {
            background: "#eeeeee",
            color: "#6a1b9a",
        },
    });


    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    const [openNav, setOpenNav] = useState(false);

    const menuItems = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
    ];
    return (
        <>

            <Grid
                container
                alignItems="center"
                sx={{
                    background:
                        "linear-gradient(135deg,#0a080b,#0c0311,#6a1b9a,#6a1b9a,#401258,#360d4f,#220929,#0c0311,#000)",
                    px: { xs: 2, sm: 4, md: 8 },
                    py: 1.5,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 9999,
                }}
            >
                <Grid size={{ xs: 5, md: 1 }}>
                    <Box sx={{ fontWeight: 600, ...headStyle }}>Divya S</Box>
                </Grid>

                <Grid
                    size={{ md: 9 }}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                        },
                        justifyContent: "flex-end",
                        gap: 2,
                    }}
                >
                    <Button sx={navStyle("home")} onClick={() => scrollToSection("home")}>
                        Home
                    </Button>

                    <Button sx={navStyle("about")} onClick={() => scrollToSection("about")}>
                        About
                    </Button>

                    <Button sx={navStyle("skills")} onClick={() => scrollToSection("skills")}>
                        Skills
                    </Button>

                    <Button
                        sx={navStyle("experience")}
                        onClick={() => scrollToSection("experience")}
                    >
                        Experience
                    </Button>

                    <Button
                        sx={navStyle("projects")}
                        onClick={() => scrollToSection("projects")}
                    >
                        Projects
                    </Button>

                    <Button
                        sx={navStyle("contact")}
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </Button>
                </Grid>

                <Grid
                    size={{ xs: 6 }}
                    sx={{
                        display: { xs: "flex", md: "none" },
                        justifyContent: "flex-end",
                    }}
                >
                    <IconButton onClick={() => setOpenNav(true)}>
                        <MenuIcon sx={{ color: "#fff" }} />
                    </IconButton>
                </Grid>
            </Grid>


            <Drawer
                anchor="right"
                open={openNav}

                onClose={() => setOpenNav(false)}
                PaperProps={{
                    sx: {
                        height: "50%",
                        top: "9%",
                        borderTopLeftRadius: 16,
                        borderBottomLeftRadius: 16,
                    },
                }}
            >
                <List sx={{ width: 180, height: 100, color: '#360d4f', }}>
                    {menuItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    scrollToSection(item);
                                    setOpen(false);
                                }}
                            >
                                <ListItemText sx={{


                                }}
                                    primary={item.charAt(0).toUpperCase() + item.slice(1)}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box className="App" id="home" style={{
                // padding: '0px 80px 31px 80px',
                paddingBottom: '65px',
                // background: '#7b1fa2',
                background: 'linear-gradient(135deg,  #0a080b, #0c0311, #6a1b9a, #6a1b9a,  #401258, #360d4f, #220929, #0c0311, #000)',

                backgroundImage: `url(${bg1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>



                <Grid container spacing={2} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: ' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                    padding: {
                        xs: '25px',
                        sm: '30px',
                        md: '30px 40px',
                        lg: '30px 60px'
                    },

                    margin: {
                        xs: '10px',
                        md: '15px 20px'
                    }

                }}>





                    <Grid size={{
                        xs: 12, // 1 card per row
                        sm: 6,  // 2 cards per row
                        // md: 4,  // 3 cards per row
                    }} sx={{
                        color: '#fff', textAlign: 'left',



                    }} >
                        <Box sx={{ fontSize: '20px', padding: '55px 40px 0px 0px' }}>Hello, I'm </Box>
                        <Box sx={{ fontSize: '60px', padding: '20px 40px 0px 0px', fontWeight: 600 }}>Divya </Box>
                        <Box sx={{ padding: '10px 40px 10px 0px ', fontSize: '30px', }}> Software Developer</Box>
                        <Box sx={{ padding: '0px 40px 30px 0px' }}>Building scalable and user-friendly web applications
                            using Java, Spring Boot, React.js, and MySQL.</Box>
                        <Box sx={{ padding: '20px 20px 20px 0px', display: 'flex', alignItems: 'stretch', justifyContent: 'flex-start', gap: '20px' }}>
                            <Button onClick={handleClick} sx={{

                                textTransform: 'none',
                                padding: '5px 20px',
                                fontSize: '20px',
                                color: ' #6a1b9a',
                                background: '#fff',
                                borderRadius: '20px',
                                '&:hover': { color: ' #6a1b9a', background: '#fff' },
                            }}><MailOutlineIcon /> <pre /> &nbsp; &nbsp;Get In Touch </Button>

                            <Button onClick={downloadPdf} sx={{
                                textTransform: 'none',
                                padding: '5px 20px',
                                fontSize: '20px',
                                background: ' none',
                                border: '2px solid #fff',
                                color: '#fff',
                                borderRadius: '20px',
                                '&:hover': { color: ' #6a1b9a', background: '#fff' },
                            }}><DownloadIcon /> <pre /> &nbsp; &nbsp; Download Resume </Button>

                        </Box>
                        <Box sx={{
                            margin: {
                                xs: '20px 0',
                                md: '20px 50px 50px 0'
                            }, padding: '20px 20px 20px 0px',
                            display: 'flex', justifyContent: {
                                xs: 'center',
                                md: 'flex-start'
                            }, alignItems: 'center', gap: '20px'
                        }}>
                            <Button
                                onMouseEnter={(e: any) => { handlePopoverOpen(e, 1) }}
                                onMouseLeave={handlePopoverClose}
                                onClick={() => { handleClickOpen(); setProfessionalPlatform(1); }} sx={{
                                    borderRadius: '50%',
                                    textTransform: 'none',
                                    padding: '0px 0px',
                                    fontSize: '20px',
                                    background: ' #6a1b9a',
                                    color: '#fff',
                                    '&:hover': {
                                        background: ' #6a1b9a', color: '#fff',
                                        transform: "scale(1.15) translateY(-3px)",
                                        boxShadow: "0 12px 30px rgba(186, 104, 200, 0.6)",
                                    },
                                }}><GitHubIcon sx={{ fontSize: '50px' }} /></Button>
                            <Button
                                onMouseEnter={(e: any) => { handlePopoverOpen(e, 2) }}
                                onMouseLeave={handlePopoverClose}
                                onClick={() => { handleClickOpen(); setProfessionalPlatform(2); }} sx={{
                                    borderRadius: '15px',
                                    textTransform: 'none',
                                    padding: '0px 0px',
                                    fontSize: '20px',
                                    background: ' #6a1b9a',
                                    color: '#fff',
                                    '&:hover': {
                                        background: ' #6a1b9a', color: '#fff',
                                        transform: "scale(1.15) translateY(-3px)",
                                        boxShadow: "0 12px 30px rgba(186, 104, 200, 0.6)",
                                    },
                                }}><LinkedInIcon sx={{ fontSize: '55px' }} /></Button>

                            <Box
                                component="img"
                                src={LeetCodeIcon}
                                alt="LeetCode"
                                onMouseEnter={(e: any) => { handlePopoverOpen(e, 3) }}
                                onMouseLeave={handlePopoverClose}
                                onClick={() => {
                                    handleClickOpen();
                                    setProfessionalPlatform(3);
                                }}
                                sx={{
                                    width: {
                                        xs: 35,
                                        sm: 40,
                                        md: 45
                                    },

                                    height: {
                                        xs: 40,
                                        sm: 45,
                                        md: 50
                                    },
                                    p: 1,
                                    borderRadius: "50%",
                                    backgroundColor: "#fff",
                                    cursor: "pointer",
                                    transition: "all 0.35s ease",
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                        transform: "scale(1.15) translateY(-3px)",
                                        boxShadow: "0 12px 30px rgba(186, 104, 200, 0.6)",
                                    },
                                }}
                            />

                        </Box>
                        <div>

                            <Popover
                                disableScrollLock
                                sx={{ pointerEvents: 'none' }}
                                open={openPopup}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}

                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Box sx={{ p: 0.5, fontSize: '15px', fontWeight: 600 }}>{id === 1 ? "Github" : id === 2 ? "LinkedIn" : id === 3 ? "Leet Code" : " "}</Box>
                            </Popover>
                        </div>
                        <React.Fragment>

                            <Dialog

                                open={open}
                                onClose={handleDialogClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                role="alertdialog"
                                disableEscapeKeyDown

                            >
                                <DialogTitle id="alert-dialog-title" sx={{

                                    background: 'linear-gradient(135deg,  #0a080b, #0c0311, #6a1b9a, #6a1b9a,  #401258, #360d4f, #220929, #0c0311, #000)',

                                    color: '#fff'
                                }}>
                                    <Grid
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: '#fff',
                                                fontSize: '24px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            👋 Let's Connect!
                                        </Box>

                                        <Box>
                                            <Button sx={{ color: '#fff', minWidth: 0 }}>
                                                <CloseIcon onClick={handleClose} sx={{ borderRadius: '5px', border: '2px solid #fff', '&:hover': { color: '#6a1b9a', background: '#fff' } }} />
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid sx={{
                                        margin: '20px', padding: '20px', textAlign: 'center', display: 'flex',
                                        flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Box sx={{ color: '#fff', fontSize: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Thanks for Visiting <br /> My Portfolio


                                        </Box>
                                        <Box sx={{ marginTop: '10px', paddingTop: '10px', color: '#fff', fontSize: '15px', }}>
                                            You will be redirected to my {professionalPlatform === 1 ? 'GITHUB' : professionalPlatform === 2 ? 'LINKEDIN' : 'LeetCode'} profile, where you can explore my {professionalPlatform === 1 ? ' repositories, projects, coding practices, technical implementations and development journey' : professionalPlatform === 2 ? 'professional experience, projects, certifications and more information' : 'coding solutions, problem-solving skills, programming progress'}


                                        </Box>

                                    </Grid>



                                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px', padding: '10px' }}>


                                        <Button onClick={professionalPlatform === 1 ? gotoGithub : professionalPlatform === 2 ? gotoLinkedIn : gotoLeetCode} sx={{
                                            textTransform: 'none',
                                            padding: '6px 20px',
                                            fontSize: '15px',
                                            background: ' #6a1b9a',
                                            border: '1px solid #fff',
                                            color: '#fff',
                                            borderRadius: '20px',
                                            '&:hover': { color: ' #6a1b9a', background: '#fff' },
                                        }}> Click here to Proceed </Button>
                                    </Grid>
                                </DialogTitle>


                            </Dialog>
                        </React.Fragment>
                    </Grid>

                    <Grid size={{
                        xs: 12, // 1 card per row
                        sm: 6,  // 2 cards per row
                        md: 4,  // 3 cards per row
                    }} sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',

                    }}>

                        <img alt="profile" src={profile} height='100%' width='70%'
                            style={{
                                padding: '10px', borderRadius: '1% 20%',
                                border: '6px dotted #fff',
                                outline: '8px dotted #fff',
                                outlineOffset: '8px',

                            }} />

                    </Grid>

                </Grid>

            </Box >

            <Zoom in={showButton}>
                <Fab
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: 30,
                        right: 30,
                        bgcolor: "#401258",
                        color: "#fff",
                        zIndex: 9999,
                        outline: '5px dotted #eeeeee',

                        "&:hover": {
                            bgcolor: "#5b197e",
                            outline: '5px dotted #eeeeee'
                        },
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Zoom>
            <Box id="about" style={{
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


                        <br />


                    </Box>



                </Box>



            </Box>



            <Box id="skills" style={{
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

            </Box>



            <Box id="experience" style={{

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




            <Box id="projects" style={{

                padding: '80px 60px 120px 60px',
                backgroundImage: `url(${bg_violet})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>


                <Box sx={{ py: 8, px: { xs: 3, md: 8 } }}>
                    {/* Professional Projects */}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="#eeeeee"

                        mb={4}
                    >
                        Featured Professional Projects
                    </Typography>

                    <Grid container spacing={4}>
                        {professionalProjects.map((project) => (
                            <Grid size={{
                                xs: 12, // 1 card per row
                                sm: 6,  // 2 cards per row
                                md: 4,  // 3 cards per row
                            }} key={project.title}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        boxShadow: 5,
                                        transition: ".3s",
                                        backgroundColor: '#eeeeee',
                                        "&:hover": {
                                            boxShadow: '0 10px 25px #fff',

                                        },
                                    }}
                                >
                                    <CardContent>

                                        <Box fontWeight={700} sx={{ color: "#401258", fontSize: '20px' }}>
                                            {project.title}
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            color="#401258"
                                            fontWeight={600}
                                            mt={1}
                                        >
                                            {project.duration}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ mt: 2, textAlign: "justify" }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 1,
                                                mt: 3,
                                            }}
                                        >
                                            {project.tech.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        color: "#401258",
                                                        fontWeight: 600,

                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Personal Projects */}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="#eeeeee"
                        mt={10}
                        mb={4}
                    >
                        Personal & Training Projects
                    </Typography>

                    <Grid container spacing={4}>
                        {personalProjects.map((project) => (
                            <Grid size={{
                                xs: 12, // 1 card per row
                                sm: 6,  // 2 cards per row
                                md: 4,  // 3 cards per row
                            }} key={project.title}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        boxShadow: 3,
                                        transition: ".3s",
                                        backgroundColor: '#eeeeee',
                                        "&:hover": {

                                            boxShadow: '0 10px 25px #fff',

                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Box fontWeight={700} sx={{ color: "#401258", fontSize: '20px' }}>
                                            {project.title}
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            sx={{ mt: 2, textAlign: "justify" }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                justifyContent: 'center', alignItems: 'center',
                                                gap: 1,
                                                mt: 3,
                                            }}
                                        >
                                            {project.tech.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        color: "#401258",
                                                        fontWeight: 600,

                                                    }}
                                                />
                                            ))}
                                        </Box>

                                        {(project.demo || project.github) && (
                                            <Box sx={{ mt: 3 }}>
                                                {project.demo && (
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        href={project.demo}
                                                        target="_blank"
                                                        sx={{
                                                            mr: 2,
                                                            bgcolor: "#401258",
                                                            "&:hover": {
                                                                bgcolor: "#5b197e",
                                                            },
                                                        }}
                                                    >
                                                        Live Demo
                                                    </Button>
                                                )}

                                                {project.github && (
                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        href={project.github}
                                                        target="_blank"
                                                        sx={{
                                                            color: "#401258",
                                                            borderColor: "#401258",
                                                        }}
                                                    >
                                                        GitHub
                                                    </Button>
                                                )}
                                            </Box>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>



            </Box>


            <Box id="contact"
                sx={{

                    padding: {
                        xs: "50px 20px 20px 20px",
                        md: "50px 20px 20px 20px",
                    },
                    backgroundImage: `url(${bg_violet})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>


                <Typography
                    variant="h3"
                    fontWeight={700}
                    color="#eeeeee"
                    textAlign="center"
                >
                    Get In Touch
                </Typography>

                <Typography
                    sx={{
                        color: "#eeeeee",
                        textAlign: "center",
                        mt: 2,
                        maxWidth: "700px",
                        mx: "auto",
                        lineHeight: 1.8,
                        fontSize: "18px",
                    }}
                >
                    I'm currently open to full-time opportunities. If you have a
                    question, an opportunity or just want to connect, feel free to reach
                    out to me. I'll be happy to hear from you.
                </Typography>

                {/* Contact Card */}

                <Card
                    sx={{
                        maxWidth: "450px",
                        margin: "40px auto 40px auto",
                        borderRadius: "25px",
                        background: '#eeeeee',
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#401258",
                    }}
                >
                    <CardContent sx={{ padding: "40px" }}>
                        <Stack spacing={4}>
                            {/* Email */}

                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <EmailIcon sx={{ color: "#401258", fontSize: 30 }} />

                                <Box>

                                    <Typography
                                        component="a"
                                        href="mailto:dsachi31@gmail.com"
                                        sx={{
                                            color: "#401258",
                                            textDecoration: "none",
                                            textAlign: 'left',
                                            "&:hover": {
                                                color: "orange",
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        dsachi31@gmail.com
                                    </Typography>
                                </Box>
                            </Box>





                            {/* LinkedIn */}

                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <LinkedInIcon sx={{ color: "#401258", fontSize: 30 }} />

                                <Box>

                                    <Typography
                                        component="a"
                                        href="https://www.linkedin.com/in/divya-s-23b390193/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "#401258",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "orange",
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        linkedin.com/in/divya-s-23b390193
                                    </Typography>
                                </Box>
                            </Box>

                            {/* GitHub */}

                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <GitHubIcon sx={{ color: "#401258", fontSize: 30 }} />

                                <Box>

                                    <Typography
                                        component="a"
                                        href="https://github.com/dsachi31"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "#401258",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "orange",
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        github.com/dsachi31
                                    </Typography>
                                </Box>
                            </Box>


                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Box
                                    component="img"
                                    src={leetcode}
                                    alt="LeetCode"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />

                                <Box>

                                    <Box
                                        component="a"
                                        href="https://leetcode.com/u/Divya_S_31/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            wordBreak: "break-all",      // Breaks long URLs
                                            overflowWrap: "break-word",  // Modern browsers
                                            whiteSpace: "normal",
                                            textAlign: 'left',
                                            color: "#401258",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "orange",
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        https://leetcode.com/u/Divya_S_31/
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingBottom: '10px' }}>
                                <LocationOnIcon sx={{ color: "#401258", fontSize: 30 }} />

                                <Box>

                                    <Typography>Bangalore, Karnataka, India</Typography>
                                </Box>
                            </Box>


                        </Stack>
                    </CardContent>
                </Card>

                {/* Footer */}

                <Typography
                    sx={{
                        color: "#ddd",
                        textAlign: "center",
                        mt: 5,
                        fontSize: "15px",
                        marginTop: '10px'
                    }}
                >
                    Written by Divya S. Built with React.js & Material UI
                </Typography>

            </Box>




        </>
    );
}


