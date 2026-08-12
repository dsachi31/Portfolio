import { Box, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import whitebg from "../src/white_bg.jpeg";

const ResumePage = () => {

    const viewResume = () => {
        window.open("/Divya_S_updated_CV.pdf", "_blank");
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/Divya_S_updated_CV.pdf";
        link.download = "Divya_S_updated_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                padding: "120px 60px 20px",
                backgroundImage: `url(${whitebg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <Box
                sx={{
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#401258",
                }}
            >
                Resume
            </Box>

            <Box
                sx={{
                    fontSize: "20px",
                    mt: 2,
                    color: "#401258",
                }}
            >
                You can view or download my resume to learn more about my professional
                experience, technical skills, education, and projects.
            </Box>

            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: 2, mt: 4 }}>
                <Button
                    variant="contained"
                    startIcon={<VisibilityIcon />}
                    onClick={viewResume}
                    sx={{
                        background: "#401258",
                        borderRadius: "20px",
                    }}
                >
                    View Resume
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={downloadResume}
                    sx={{
                        borderColor: "#401258",
                        color: "#401258",
                        borderRadius: "20px",
                    }}
                >
                    Download Resume
                </Button>
            </Box>

            {/* Resume Preview */}
            {/* <Box
                sx={{
                    mt: 5,
                    border: "2px solid #ddd",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                }}
            >
                <iframe
                    src="/Divya_S_updated_CV.pdf"
                    width="100%"
                    height="900px"
                    title="Resume Preview"
                    style={{ border: "none" }}
                />
            </Box> */}
        </Box>
    );
};

export default ResumePage;