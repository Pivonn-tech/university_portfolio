import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Stack,
    Chip,
    Alert,
    Snackbar
} from "@mui/material";
import { Email, Phone, LocationOn, Schedule, Send } from "@mui/icons-material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setOpenSnackbar(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    const departments = [
        {
            name: "Admissions Office",
            email: "admissions@onnlytech.edu",
            phone: "+1 (555) 123-ADMIT",
            hours: "Mon-Fri: 8:00 AM - 6:00 PM",
            description: "Information about applications and deadlines"
        },
        {
            name: "Academic Affairs",
            email: "academics@onnlytech.edu",
            phone: "+1 (555) 123-ACAD",
            hours: "Mon-Fri: 9:00 AM - 5:00 PM",
            description: "Course information and academic support"
        },
        {
            name: "Student Services",
            email: "students@onnlytech.edu",
            phone: "+1 (555) 123-HELP",
            hours: "24/7 Support",
            description: "Housing and student life assistance"
        },
        {
            name: "Career Center",
            email: "careers@onnlytech.edu",
            phone: "+1 (555) 123-CAREER",
            hours: "Mon-Fri: 8:00 AM - 6:00 PM",
            description: "Internships and career guidance"
        }
    ];

    const faqs = [
        {
            question: "How do I apply to ONNLY-TECH UNIVERSITY?",
            answer: "You can apply through our online application portal. Visit the Admissions page for detailed instructions."
        },
        {
            question: "What are the tuition fees?",
            answer: "Tuition varies by program. Contact our admissions office for detailed fee structure and scholarships."
        },
        {
            question: "Do you offer online programs?",
            answer: "Yes, we offer both online and hybrid programs across various technology disciplines."
        },
        {
            question: "Is campus housing available?",
            answer: "Yes, we provide modern on-campus housing for both domestic and international students."
        }
    ];

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background:
                        "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                    color: "white",
                    py: 8,
                    mb: 6
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            opacity: 0.9,
                            maxWidth: 600,
                            mx: "auto"
                        }}
                    >
                        Get in touch with Africa's premier technology
                        institution
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Contact Information */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "#2563eb", mb: 4 }}
                        >
                            Get In Touch
                        </Typography>

                        <Stack spacing={3}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <LocationOn
                                    sx={{
                                        color: "#2563eb",
                                        mr: 2,
                                        fontSize: 32
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Campus Location
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Tech Innovation Park
                                        <br />
                                        Digital District
                                        <br />
                                        Silicon Valley, Africa 94025
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Email
                                    sx={{
                                        color: "#2563eb",
                                        mr: 2,
                                        fontSize: 32
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Email Address
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        info@onnlytech.edu
                                        <br />
                                        onnlytechuni@gmail.com
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Phone
                                    sx={{
                                        color: "#2563eb",
                                        mr: 2,
                                        fontSize: 32
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Phone Number
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        +1 (555) 123-ONTL
                                        <br />
                                        +1 (555) 123-TECH
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Schedule
                                    sx={{
                                        color: "#2563eb",
                                        mr: 2,
                                        fontSize: 32
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Office Hours
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Monday - Friday: 8:00 AM - 8:00 PM
                                        <br />
                                        Saturday: 9:00 AM - 4:00 PM
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} md={8}>
                        <Card
                            sx={{
                                p: 4,
                                transition: "transform 0.3s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: "bold",
                                    color: "#2563eb",
                                    mb: 3
                                }}
                            >
                                Send us a Message
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Full Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            startIcon={<Send />}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                                background:
                                                    "linear-gradient(135deg, #2563eb, #7c3aed)",
                                                "&:hover": {
                                                    background:
                                                        "linear-gradient(135deg, #1d4ed8, #5b21b6)",
                                                    transform:
                                                        "translateY(-2px)"
                                                },
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                </Grid>

                {/* Department Contacts */}
                <Box sx={{ my: 8 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#2563eb",
                            textAlign: "center",
                            mb: 4
                        }}
                    >
                        Department Contacts
                    </Typography>
                    <Grid container spacing={3}>
                        {departments.map((dept, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        textAlign: "center",
                                        p: 3,
                                        transition: "transform 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-4px)"
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {dept.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2, minHeight: 40 }}
                                    >
                                        {dept.description}
                                    </Typography>
                                    <Stack spacing={1} sx={{ mb: 2 }}>
                                        <Chip
                                            icon={<Email />}
                                            label={dept.email}
                                            size="small"
                                            variant="outlined"
                                        />
                                        <Chip
                                            icon={<Phone />}
                                            label={dept.phone}
                                            size="small"
                                            variant="outlined"
                                        />
                                        <Chip
                                            icon={<Schedule />}
                                            label={dept.hours}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Stack>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    >
                                        Contact Department
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* FAQ Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#2563eb",
                            textAlign: "center",
                            mb: 4
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Grid container spacing={3}>
                        {faqs.map((faq, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card
                                    sx={{
                                        p: 3,
                                        transition: "transform 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-4px)"
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{
                                            fontWeight: "bold",
                                            color: "#2563eb"
                                        }}
                                    >
                                        {faq.question}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {faq.answer}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Thank you for your message! We'll get back to you within 24
                    hours.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;

