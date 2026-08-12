import {
    Box,
    Typography,
    Card,
    CardContent,
    Stack,
    IconButton,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import bg_violet from "../src/bg_violet.png";

const ContactPage = () => {
    return (
        <Box
            sx={{
                padding: {
                    xs: "80px 20px",
                    md: "100px 60px",
                },
                backgroundImage: `url(${bg_violet})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* Heading */}

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
                I'm currently open to full-time opportunities. Whether you have a
                question, an opportunity, or just want to connect, feel free to reach
                out. I'll be happy to hear from you.
            </Typography>

            {/* Contact Card */}

            <Card
                sx={{
                    maxWidth: "750px",
                    margin: "50px auto",
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
                                        "&:hover": {
                                            color: "#401258",
                                        },
                                    }}
                                >
                                    dsachi31@gmail.com
                                </Typography>
                            </Box>
                        </Box>

                        {/* Location */}

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <LocationOnIcon sx={{ color: "#401258", fontSize: 30 }} />

                            <Box>

                                <Typography>Bangalore, Karnataka, India</Typography>
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
                                            color: "#401258",
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
                                            color: "#401258",
                                        },
                                    }}
                                >
                                    github.com/dsachi31
                                </Typography>
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
                }}
            >
                © 2026 Divya S. Built with React.js & Material UI
            </Typography>
        </Box>
    );
};

export default ContactPage;