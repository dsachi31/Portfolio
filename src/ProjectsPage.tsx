import {
    Box,
    Typography,
    Card,
    CardContent,
    Chip,
    Grid,
    Button,
} from "@mui/material";
import bg_violet from '../src/bg_violet.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import react from 'react'
const ProjectsPage = () => {


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


    return (<Box sx={{

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
                    <Grid size={4} key={project.title}>
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
                    <Grid size={4} key={project.title}>
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



    </Box>)
}

export default ProjectsPage;