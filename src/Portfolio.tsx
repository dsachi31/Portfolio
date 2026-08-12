




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
import AboutPage from '../src/AboutPage'
import SkillsPage from '../src/SkillsPage'
import ExperinecePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
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

    return (
        <>
            <div className="App" style={{
                // padding: '0px 80px 31px 80px',
                paddingBottom: '65px',
                // background: '#7b1fa2',
                background: 'linear-gradient(135deg,  #0a080b, #0c0311, #6a1b9a, #6a1b9a,  #401258, #360d4f, #220929, #0c0311, #000)',

                // background: 'linear-gradient(135deg,  #6a1b9a, #6a1b9a, #8e24aa, #7b1fa2,  #7b1fa2, #6a1b9a, #6a1b9a, #6a1b9a,  #ba68c8, #9c27b0)',
                // boxShadow: ' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',

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
                    // backgroundImage: `url(${profile})`,
                    // backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center",
                    // backgroundSize: "cover",
                }}>





                    <Grid size={6} sx={{
                        color: '#fff', textAlign: 'left',


                    }} >
                        <Box sx={{ fontSize: '20px', padding: '20px 40px 0px 0px' }}>Hello, I'm </Box>
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
                                        xs: 40,
                                        sm: 45,
                                        md: 50
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
                            {/* <Box
                                aria-owns={openPopup ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            >
                                Hover with a Popover.
                            </Box> */}
                            <Popover
                                id="mouse-over-popover"
                                sx={{ pointerEvents: 'none' }}
                                open={openPopup}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Box sx={{ p: 1 }}>{id === 1 ? "Github" : id === 2 ? "LinkedIn" : "LeetCode"}</Box>
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

                    <Grid size={6} sx={{
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

                    {/* <Grid size={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

                    <img alt="profile" src={profile} height='120%' width='100%'
                        style={{
                            // padding: '10px', borderRadius: '50%',
                            // border: '6px dotted #fff',
                            // outline: '8px dotted #fff',
                            // outlineOffset: '8px',
                        }} />

                </Grid> */}

                </Grid>

            </div >
            <AboutPage />
            <SkillsPage />
            <ExperinecePage />
            <ProjectsPage />
            <ResumePage />
            <ContactPage />

        </>
    );
}


