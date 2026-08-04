




import logo from './logo.svg';
import './App.css';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import * as React from 'react';

import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
const skillCards = [
    {
        image: "/assets/images/springboot.JPG",
        title: "Spring Boot",
        points: [
            "Sample Spring Boot application",
            "REST API development",
            "JPA & Hibernate usage",
        ],
    },
    {
        image: "/assets/images/reactImage.JPG",
        title: "React",
        points: [
            "Web application using React",
            "Component-based architecture",
            "State & props management",
        ],
    },
    {
        image: "/assets/images/restApi.jpg",
        title: "REST API",
        points: [
            "RESTful API development",
            "Request & response handling",
            "HTTP methods & status codes",
        ],
    },
    {
        image: "/assets/images/apiIntegration.JPG",
        title: "API Integration",
        points: [
            "RESTful API development",
            "Request & response handling",
            "HTTP methods & status codes",
        ],
    },
    {
        image: "/assets/images/gitGithub.jpg",
        title: "Git & GitHub",
        points: [
            "Version control",
            "Branching & merging",
            "Pull requests",
        ],
    },
    {
        image: "/assets/images/devops.jpg",
        title: "DevOps",
        points: [
            "DevOps fundamentals",
        ],
    },
];


const infoCards = [
    {
        title: 'Real-world industry experience',
        points: [
            'Learning directly from professionals who have worked on live production projects in the IT industry.',
            'Providing insights into real workflows, tools, challenges, best practices, and decision-making processes used in companies.',
        ],
    },
    {
        title: 'Hands-on project-based learning',
        points: [
            'Focused on learning by doing rather than theory alone.',
            'Working on practical, end-to-end projects such as web applications, APIs, and full-stack systems.',
            'Implementing real features, fixing bugs, and integrating technologies to become job-ready.',
        ],
    },
    {
        title: 'Career-focused mentorship',
        points: [
            'Mentorship that goes beyond just teaching technology.',
            'Guided support including code reviews, best practices, interview preparation.',
            'Helping learners prepare for real IT roles with clarity and confidence.',
        ],
    },
];
// jjjjjjjjjjjjjjjjjjjjjjjj
const itemStyle = {
    padding: '50px',
    borderRadius: '30px',
    minWidth: 240,
    backgroundColor: '#97aaf6ff',

    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    '&:hover': {
        transform: 'scale(1.1)',
        // boxShadow: '0 20px 40px rgba(0,0,0,0.50)',
        boxShadow: '0 20px 40px #fff',

        zIndex: 10,
    }
};

const textStyle = {
    marginTop: 2,
    fontWeight: 500,

};

const ImageStyle = {
    borderRadius: '50px',
    maxWidth: '100%',  // image will never exceed parent width
    height: 'auto',
}
export default function TechDevelopment() {

    const [showButton, setShowButton] = useState(false);
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const [state, setState] = React.useState({

        right: false,
    });

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        handleClose(); // close menu after click
    };

    return (
        <div className="App"
        // style={{ background: 'linear-gradient(135deg, #ede7f6, #f5f3ff)', }}
        >



            {showButton && (
                <Fab
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: '10%',
                        right: '48%',
                        backgroundColor: '#673ab7',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#4527a0',
                        },
                        zIndex: 1000,
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            )}



            <Box
                sx={{
                    position: 'relative', // ⭐ important

                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    background:
                        'linear-gradient(135deg, #ede7f6, #f5f3ff)',
                }}
            >
                <Box style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                }}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{
                            minWidth: '40px',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            backgroundColor: '#673ab7',
                            color: '#fff',
                            boxShadow: '0 6px 20px rgba(103,58,183,0.35)',
                            '&:hover': {
                                backgroundColor: '#512da8',
                            },
                        }}
                    >
                        <MenuIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                        PaperProps={{
                            sx: {
                                mt: 1,
                                borderRadius: '14px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            },
                        }}
                    >
                        <MenuItem onClick={() => scrollToSection('whytech')}>
                            Why Tech Development
                        </MenuItem>

                        <MenuItem onClick={() => scrollToSection('whatyouwilllearn')}>
                            What will you Learn
                        </MenuItem>

                        <MenuItem onClick={() => scrollToSection('aboutus')}>
                            About Us
                        </MenuItem>
                    </Menu>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        // borderRadius:'50%',
                        borderRadius: '50% 12%',
                        alignItems: 'flex-start',
                        background: '#fff'// align items at the top for slight offset
                    }}
                >
                    <Box
                        sx={{
                            fontFamily: '"Great Vibes", cursive',
                            // fontSize: '52px',
                            fontWeight: 400, // Great Vibes supports only 400
                            color: '#311b92',
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        <span style={{ fontSize: '50px', fontWeight: 800 }}>T</span>
                        <span
                            style={{
                                position: 'relative',
                                top: '20px', // move D slightly down
                                marginLeft: '2px',
                                fontWeight: 800,
                                fontSize: '29px',
                                right: '20px',
                            }}
                        >
                            D
                        </span>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        fontSize: { xs: '36px', md: '56px' },
                        fontWeight: 800,
                        color: '#4527a0',
                    }}
                >
                    Tech Development
                </Typography>

                <Typography
                    sx={{
                        fontSize: '18px',
                        maxWidth: '600px',
                        mt: 2,
                        color: '#444',
                    }}
                >
                    Learn, build, and grow with real-world IT experience guided by
                    industry professionals.
                </Typography>

                {/* <Box
          sx={{
            mt: 8,
            padding: '14px 32px',
            borderRadius: '30px',
            background: '#673ab7',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
            transition: '0.3s',
            '&:hover': {
              background: '#512da8',
              transform: 'translateY(-3px)',
            },
          }}
        >
          Get Started
        </Box> */}
            </Box>
            <Box sx={{
                padding: '80px 20px', maxWidth: '1000px', margin: 'auto',

                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',

            }}>
                <Typography id="aboutus"
                    sx={{
                        // fontSize: '32px',
                        // fontWeight: 700,
                        color: '#4527a0',
                        textAlign: 'center',



                        fontSize: { xs: '36px', md: '56px' },
                        fontWeight: 800,
                    }}
                >
                    About Us
                </Typography>

                <Box>
                    <img src="/assets/images/technology.JPG" width="auto" height="auto"
                        style={{
                            borderRadius: '10px',
                            maxWidth: '100%',  // image will never exceed parent width
                            height: 'auto',
                            marginTop: '20px',
                        }} />

                </Box>

                <Typography sx={{ marginTop: '20px', fontSize: '18px', lineHeight: 1.8, color: '#333' }}>
                    Tech Development is an initiative driven by IT professionals with
                    2+ years of real-world industry experience. We help students bridge
                    the gap between academics and practical IT skills.
                </Typography>
            </Box>


            <Box id="whytech" sx={{ padding: '80px 20px', background: '#e1dfeaff', marginTop: '10px', }}>
                <Typography
                    sx={{
                        fontSize: '38px',
                        fontWeight: 700,
                        textAlign: 'center',
                        color: '#4527a0',
                        marginBottom: '60px'
                    }}
                >
                    Why Tech Development?
                </Typography>

                {/* <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            maxWidth: '1000px',
            margin: 'auto',
          }}
        >
          {[
            'Real-world industry experience',
            '1.learning directly from professionals who have worked on live production projects in the IT industry.',
            '2. Providing an  insights into actual workflows, tools, challenges, best practices, and decision-making processes used in real companies.',
            '',
            'Hands-on project-based learning',
            '1. This approach focuses on learning by doing.',
            '2. Students work on practical, end-to-end projects such as building web applications, APIs, and full-stack systems.',
            '3. By implementing real features, fixing bugs, and integrating technologies, learners strengthen their technical skills, problem-solving ability, and confidence — making them job-ready',

            'Career-focused mentorship',
            '1.Career-focused mentorship goes beyond teaching technology',
            '2. It provides guided support for career growth, including code reviews, best practices, interview preparation, resume guidance, and understanding industry expectations.',
            '3.prepare for real IT roles with clarity and confidence',
          ].map((text) => (
            <Box
              key={text}
              sx={{
                padding: '30px',
                borderRadius: '20px',
                background: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                fontSize: '30px'
              }}
            >
              {text}
            </Box>
          ))}
        </Box> */}

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4,
                        maxWidth: '1000px',
                        margin: 'auto',
                        marginBottom: '50px'

                    }}
                >
                    {infoCards.map((card) => (
                        <Box
                            key={card.title}
                            sx={{
                                padding: '50px',
                                borderRadius: '20px',
                                background: '#fff',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                transition: 'all 1s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                },
                            }}
                        >
                            {/* Headline */}
                            <Box
                                sx={{
                                    fontSize: '22px',
                                    fontWeight: 700,
                                    color: '#7459c4ff',
                                    mb: 2,
                                    textAlign: 'center',
                                }}
                            >
                                {card.title}
                            </Box>

                            {/* Numbered points */}
                            <Box
                                component="ul"
                                sx={{
                                    paddingLeft: '20px',
                                    margin: 0,
                                    color: '#333',
                                    fontSize: '15px',
                                    lineHeight: 1.7,
                                }}
                            >
                                <hr style={{ color: '#ebe3e3ff', width: '100%', marginBottom: '20px' }} />
                                {card.points.map((point, index) => (
                                    <li key={index} style={{ marginBottom: '8px', paddingBottom: '10px', textAlign: 'left' }}>
                                        {/* <ArrowRightIcon /> */}
                                        {point}
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Box>



            <Typography id="whatyouwilllearn"
                sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    textAlign: 'center',
                    color: '#4527a0',
                    marginBottom: '30px',
                    marginTop: '50px',
                    padding: ' 20px 60px'
                }}
            >
                What You Will Learn ?
            </Typography>


            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 4,
                    maxWidth: '1100px',
                    margin: 'auto',
                    padding: '10px 40px',
                    marginBottom: '70px',

                }}
            >
                {skillCards.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            textAlign: 'left',
                            borderRadius: '20px',
                            background: '#fff',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                            transition: 'all 0.4s ease',
                            overflow: 'hidden',

                            '&:hover': {
                                transform: 'scale(1.1)',
                                // boxShadow: '0 20px 40px rgba(0,0,0,0.50)',
                                boxShadow: '0 20px 40px #cec6c6ff',

                                zIndex: 10,
                            }
                            // '&:hover': {
                            //   transform: 'translateY(-8px)',
                            //   boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            // },
                        }}
                    >

                        <Box
                            component="img"
                            src={card.image}
                            alt={card.title}
                            sx={{
                                width: '100%',
                                height: '180px',
                                objectFit: 'cover',
                            }}
                        />


                        <Box sx={{ padding: '25px' }}>
                            <Box
                                sx={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: '#7459c4ff',
                                    textAlign: 'center',
                                    mb: 2,
                                }}
                            >
                                {card.title}
                            </Box>

                            <hr style={{ borderColor: '#ebe3e3ff', marginBottom: '16px' }} />


                            <Box
                                component="ul"
                                sx={{
                                    paddingLeft: '20px',
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: 1.7,
                                }}
                            >
                                {card.points.map((point, idx) => (
                                    <li key={idx} style={{ marginBottom: '10px' }}>
                                        {point}
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>


            {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          maxWidth: '1100px',
          margin: 'auto',
          padding: '40px',
          overflow: 'visible',
        }}
      >
        {skillCards.map((card, index) => {
          const isHovered = hoveredIndex === index;

          let translateX = 0;
          if (hoveredIndex !== null) {
            if (index < hoveredIndex) translateX = -50;
            if (index > hoveredIndex) translateX = 50;
          }

          return (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                width: '400px',
                borderRadius: '20px',
                background: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                cursor: 'pointer',

                transform: `
                translateX(${translateX}px)
                scale(${isHovered ? 1.15 : 1})
              `,

                opacity:
                  hoveredIndex !== null && !isHovered ? 0.6 : 1,

                transition:
                  'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',

                zIndex: isHovered ? 10 : 1,
              }}
            >
              
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />

             
              <Box sx={{ padding: '25px' }}>
                <Box
                  sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#7459c4',
                    textAlign: 'center',
                    mb: 2,
                  }}
                >
                  {card.title}
                </Box>

                <hr
                  style={{
                    borderColor: '#ebe3e3',
                    marginBottom: '16px',
                  }}
                />

                <Box
                  component="ul"
                  sx={{
                    paddingLeft: '20px',
                    margin: 0,
                    fontSize: '15px',
                    color: '#333',
                    lineHeight: 1.7,
                  }}
                >
                  {card.points.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: '10px' }}>
                      {point}
                    </li>
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box> */}








            <Box
                sx={{
                    padding: '80px 20px',
                    textAlign: 'center',
                    background:
                        'linear-gradient(135deg, #673ab7, #512da8)',
                    color: '#fff',
                }}
            >
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                    Get Ready to start your IT journey..!
                </Typography>

                <Typography sx={{ mt: 2, opacity: 0.9 }}>
                    Learn from experience. Build real projects. Grow with confidence.
                </Typography>
                <Box sx={{ marginTop: '50px', fontFamily: 'Great Vibes, cursive', fontSize: '50px' }}>
                    Thank you
                </Box>
                {/* <Box
          sx={{
            mt: 4,
            display: 'inline-block',
            padding: '14px 32px',
            borderRadius: '30px',
            background: '#fff',
            color: '#512da8',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Contact Us
        </Box> */}
            </Box>
            <Box
                sx={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#666',
                }}
            >
                © 2025 Tech Development. All rights reserved.
            </Box>





            {/* 
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background:
            'linear-gradient(270deg, #7e57c2, #9575cd, #ede7f6, #d1c4e9, #b39ddb,  #ede7f6, #9575cd, #7e57c2, #673ab7)',
          backgroundSize: '600% 600%',
          animation: 'gradientMove 10s ease-in infinite',
          color: 'white',
          textShadow: '2px 2px 4px #000',
          fontFamily: 'sans-serif',
          fontSize: '30px',
          fontWeight: 700,
          textAlign: 'center',


          '@keyframes gradientMove': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
        }}
      >
       
        <Box
          sx={{
            display: 'flex',
            // borderRadius:'50%',
            borderRadius: '50% 12%',
            alignItems: 'flex-start',
            background: '#fff'// align items at the top for slight offset
          }}
        >
          <Box
            sx={{
              fontFamily: '"Great Vibes", cursive',
              // fontSize: '52px',
              fontWeight: 400, // Great Vibes supports only 400
              color: '#311b92',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: '50px' }}>T</span>
            <span
              style={{
                position: 'relative',
                top: '25px', // move D slightly down
                marginLeft: '2px',
                right: '25px',
              }}
            >
              D
            </span>
          </Box>
        </Box>

     
        <Box>Tech Development <AutoAwesomeIcon sx={{ fontSize: '30px' }} /></Box>

        <Box sx={{ width: '64px' }} />
      </Box> */}


            {/* 

      <Box
        sx={{
          maxWidth: '1000px',
          margin: 'auto',
          padding: { xs: '20px', md: '40px' },
          background: 'linear-gradient(135deg, #ede7f6, #f5f3ff)',
          borderRadius: '16px',
          // boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        }}
      >
     
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            color: '#4527a0',
            mb: 3,
          }}
        >
          Tech Development
        </Typography>

        <Typography sx={{ fontSize: '16px', color: '#333', mb: 2, lineHeight: 1.8 }}>
          Tech Development is a professional initiative driven by experienced IT professionals with
          over <strong>2+ years of hands-on industry experience</strong>.
          Our goal is to bridge the gap between academic learning and real-world IT industry requirements
          by delivering practical, industry-focused knowledge.
        </Typography>

        <Typography sx={{ fontSize: '16px', color: '#333', mb: 2, lineHeight: 1.8 }}>
          We specialize in developing <strong>web applications, desktop applications, and mobile applications</strong>,
          with a strong emphasis on scalability, performance, and security.
          Our expertise also includes application deployment, maintenance, and security best practices.
        </Typography>

        <Typography sx={{ fontSize: '16px', color: '#333', mb: 3, lineHeight: 1.8 }}>
          This initiative is designed to help IT students and aspiring developers gain
          real-world exposure by learning from our experience, professional workflows,
          and the IT culture we have worked in.
        </Typography>

      
        <Typography
          sx={{
            fontWeight: 600,
            color: '#3c355dff',
            mb: 1,
            fontSize: '30px',
          }}
        >
          Key Skill Overview
        </Typography>


        <Box
          sx={{
            padding: '50px',
            overflow: 'hidden',
            width: '100%',

          }}
        >
          <Box
            sx={{
              padding: '20px',
              height: 'auto',
              display: 'flex',
              gap: 4,
              // animation: 'scrollLeft 10s linear infinite',

              // '@keyframes scrollLeft': {
              //   '0%': {
              //     transform: 'translateX(-100%)',
              //   },
              //   '100%': {
              //     transform: 'translateX(100%)',
              //   },
              // },
            }}
          >
         
            <Box sx={itemStyle}>
              <img src="/assets/images/springboot.JPG" width="200" height="200" style={ImageStyle} />
              <Box sx={textStyle}>
                Sample project on Spring Boot application using Java
              </Box>
            </Box>

         
            <Box sx={itemStyle}>
              <img src="/assets/images/reactImage.JPG" width="200" height="200" style={ImageStyle} />
              <Box sx={textStyle}>
                Sample project on Web application using React
              </Box>
            </Box>

      
            <Box sx={itemStyle}>
              <img src="/assets/images/restApi.jpg" width="200" height="200" style={ImageStyle} />
              <Box sx={textStyle}>
                RESTful API development
              </Box>
            </Box>

       
            <Box sx={itemStyle}>
              <img src="/assets/images/apiIntegration.JPG" width="200" height="200" style={ImageStyle} />
              <Box sx={textStyle}>
                Integration of RESTful APIs
              </Box>
            </Box>

            <Box sx={itemStyle}>
              <img src="/assets/images/gitGithub.jpg" width="200" height="200" style={ImageStyle} />
              <Box sx={textStyle}>
                Git and GitHub
              </Box>
            </Box>

           
            <Box sx={itemStyle}>
              <img src="/assets/images/devops.jpg" width="200" height="200" style={ImageStyle} />
              <Box sx={textStyle}>
                DevOps fundamentals
              </Box>
            </Box>
          </Box>
        </Box>





      </Box> */}





        </div>
    );
}


