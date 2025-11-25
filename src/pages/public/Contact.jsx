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
    Snackbar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { 
    Email, 
    Phone, 
    LocationOn, 
    Schedule, 
    Send, 
    ExpandMore,
    Close,
    WhatsApp,
    Chat,
    ContactSupport,
    School,
    Groups,
    SupportAgent
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        department: ""
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [departmentDialog, setDepartmentDialog] = useState(null);
    const [faqOpen, setFaqOpen] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setOpenSnackbar(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            department: ""
        });
    };

    const handleFaqToggle = (panel) => (event, isExpanded) => {
        setFaqOpen(isExpanded ? panel : null);
    };

    const handleDepartmentContact = (dept) => {
        setFormData(prev => ({
            ...prev,
            subject: `Inquiry for ${dept.name}`,
            department: dept.name
        }));
        setDepartmentDialog(null);
        // Scroll to form
        document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
    };

    const handleQuickAction = (action) => {
        switch(action) {
            case 'apply':
                navigate('/apply');
                break;
            case 'admissions':
                navigate('/admissions');
                break;
            case 'student-portal':
                navigate('/login');
                break;
            case 'programs':
                navigate('/programs');
                break;
            default:
                break;
        }
    };

    const departments = [
        {
            name: "Admissions Office",
            email: "admissions@onnlytech.edu",
            phone: "+1 (555) 123-ADMIT",
            hours: "Mon-Fri: 8:00 AM - 6:00 PM",
            description: "Information about applications, deadlines, and requirements",
            emergency: false,
            whatsapp: "+1555123ADMIT"
        },
        {
            name: "Academic Affairs",
            email: "academics@onnlytech.edu",
            phone: "+1 (555) 123-ACAD",
            hours: "Mon-Fri: 9:00 AM - 5:00 PM",
            description: "Course information, academic support, and faculty matters",
            emergency: false,
            whatsapp: "+1555123ACAD"
        },
        {
            name: "Student Services",
            email: "students@onnlytech.edu",
            phone: "+1 (555) 123-HELP",
            hours: "24/7 Support",
            description: "Housing, student life, counseling, and wellness services",
            emergency: true,
            whatsapp: "+1555123HELP"
        },
        {
            name: "Career Center",
            email: "careers@onnlytech.edu",
            phone: "+1 (555) 123-CAREER",
            hours: "Mon-Fri: 8:00 AM - 6:00 PM",
            description: "Internships, career guidance, and job placement",
            emergency: false,
            whatsapp: "+1555123CAREER"
        },
        {
            name: "Financial Aid",
            email: "finaid@onnlytech.edu",
            phone: "+1 (555) 123-AID",
            hours: "Mon-Fri: 9:00 AM - 5:00 PM",
            description: "Scholarships, grants, and financial assistance",
            emergency: false,
            whatsapp: "+1555123AID"
        },
        {
            name: "International Office",
            email: "international@onnlytech.edu",
            phone: "+1 (555) 123-INTL",
            hours: "Mon-Fri: 8:00 AM - 6:00 PM",
            description: "Visa support and international student services",
            emergency: false,
            whatsapp: "+1555123INTL"
        }
    ];

    const quickActions = [
        {
            title: "Start Application",
            description: "Begin your journey to ONNLY-TECH",
            icon: <School sx={{ fontSize: 40 }} />,
            action: "apply",
            color: "#2563eb"
        },
        {
            title: "Admissions Info",
            description: "Learn about requirements and deadlines",
            icon: <Groups sx={{ fontSize: 40 }} />,
            action: "admissions",
            color: "#7c3aed"
        },
        {
            title: "Student Portal",
            description: "Access your courses and resources",
            icon: <ContactSupport sx={{ fontSize: 40 }} />,
            action: "student-portal",
            color: "#059669"
        },
        {
            title: "Browse Programs",
            description: "Explore our academic offerings",
            icon: <SupportAgent sx={{ fontSize: 40 }} />,
            action: "programs",
            color: "#dc2626"
        }
    ];

    const faqs = [
        {
            question: "How do I apply to ONNLY-TECH UNIVERSITY?",
            answer: "You can apply through our online application portal. Visit the Admissions page for detailed instructions and requirements. Our admissions team is available to help you through the process."
        },
        {
            question: "What are the tuition fees and payment options?",
            answer: "Tuition varies by program. We offer flexible payment plans, scholarships, and financial aid. Contact our financial aid office for detailed fee structure and assistance options."
        },
        {
            question: "Do you offer online and hybrid programs?",
            answer: "Yes, we offer both online and hybrid programs across various technology disciplines. Our flexible learning options allow you to balance education with other commitments."
        },
        {
            question: "Is campus housing available for students?",
            answer: "Yes, we provide modern on-campus housing with various accommodation options. Our housing office can help you find the perfect living arrangement."
        },
        {
            question: "What career support services do you offer?",
            answer: "Our career center provides resume building, interview preparation, internship placements, and job fairs with top tech companies. 95% of our graduates secure employment within 6 months."
        },
        {
            question: "Are there scholarships available?",
            answer: "Yes, we offer merit-based scholarships, need-based grants, and special talent scholarships. 85% of our students receive some form of financial assistance."
        }
    ];

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc", pt: 4 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
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
                            mx: "auto",
                            mb: 4
                        }}
                    >
                        Get in touch with Africa's premier technology institution
                    </Typography>
                    
                    {/* Quick Actions */}
                    <Grid container spacing={2} justifyContent="center">
                        {quickActions.map((action, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <Card 
                                    sx={{ 
                                        textAlign: 'center', 
                                        p: 2, 
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        background: `linear-gradient(135deg, ${action.color}15, ${action.color}30)`,
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 8px 25px ${action.color}40`
                                        }
                                    }}
                                    onClick={() => handleQuickAction(action.action)}
                                >
                                    <Box sx={{ color: action.color, mb: 1 }}>
                                        {action.icon}
                                    </Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                        {action.title}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
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
                                <LocationOn sx={{ color: "#2563eb", mr: 2, fontSize: 32 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Campus Location
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tech Innovation Park
                                        <br />
                                        Digital District
                                        <br />
                                        Silicon Valley, Africa 94025
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Email sx={{ color: "#2563eb", mr: 2, fontSize: 32 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Email Address
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        info@onnlytech.edu
                                        <br />
                                        onnlytechuni@gmail.com
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Phone sx={{ color: "#2563eb", mr: 2, fontSize: 32 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Phone Number
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        +1 (555) 123-ONTL
                                        <br />
                                        +1 (555) 123-TECH
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Schedule sx={{ color: "#2563eb", mr: 2, fontSize: 32 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Office Hours
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Monday - Friday: 8:00 AM - 8:00 PM
                                        <br />
                                        Saturday: 9:00 AM - 4:00 PM
                                        <br />
                                        Emergency Support: 24/7
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Emergency Contact */}
                            <Box sx={{ 
                                p: 3, 
                                bgcolor: '#fee2e2', 
                                borderRadius: 2, 
                                border: '2px solid #ef4444'
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: '#dc2626', mb: 1 }}>
                                    🚨 Emergency Contact
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    For urgent student emergencies
                                    <br />
                                    <strong>+1 (555) 123-EMERGENCY</strong>
                                    <br />
                                    24/7 Available
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} md={8}>
                        <Card
                            id="contact-form"
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
                                sx={{ fontWeight: "bold", color: "#2563eb", mb: 3 }}
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
                                            label="Department (Optional)"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            variant="outlined"
                                            placeholder="e.g., Admissions, Student Services"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
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
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                startIcon={<Send />}
                                                sx={{
                                                    px: 4,
                                                    py: 1.5,
                                                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                                                    "&:hover": {
                                                        background: "linear-gradient(135deg, #1d4ed8, #5b21b6)",
                                                        transform: "translateY(-2px)"
                                                    },
                                                    transition: "all 0.3s ease"
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="large"
                                                startIcon={<WhatsApp />}
                                                sx={{
                                                    px: 4,
                                                    py: 1.5,
                                                    borderColor: '#25D366',
                                                    color: '#25D366',
                                                    '&:hover': {
                                                        bgcolor: '#25D366',
                                                        color: 'white'
                                                    }
                                                }}
                                            >
                                                WhatsApp Chat
                                            </Button>
                                        </Stack>
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
                        sx={{ fontWeight: "bold", color: "#2563eb", textAlign: "center", mb: 4 }}
                    >
                        Department Contacts
                    </Typography>
                    <Grid container spacing={3}>
                        {departments.map((dept, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        p: 3,
                                        transition: "transform 0.3s",
                                        border: dept.emergency ? '2px solid #ef4444' : '1px solid #e2e8f0',
                                        "&:hover": { transform: "translateY(-4px)" }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                                        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                                            {dept.name}
                                        </Typography>
                                        {dept.emergency && (
                                            <Chip label="24/7" color="error" size="small" />
                                        )}
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 40 }}>
                                        {dept.description}
                                    </Typography>
                                    <Stack spacing={1} sx={{ mb: 2 }}>
                                        <Chip
                                            icon={<Email />}
                                            label={dept.email}
                                            size="small"
                                            variant="outlined"
                                            clickable
                                            onClick={() => window.location.href = `mailto:${dept.email}`}
                                        />
                                        <Chip
                                            icon={<Phone />}
                                            label={dept.phone}
                                            size="small"
                                            variant="outlined"
                                            clickable
                                            onClick={() => window.location.href = `tel:${dept.phone}`}
                                        />
                                        <Chip
                                            icon={<Schedule />}
                                            label={dept.hours}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onClick={() => handleDepartmentContact(dept)}
                                        >
                                            Quick Message
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<Chat />}
                                            sx={{ 
                                                bgcolor: '#25D366',
                                                '&:hover': { bgcolor: '#128C7E' }
                                            }}
                                        >
                                            WhatsApp
                                        </Button>
                                    </Stack>
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
                        sx={{ fontWeight: "bold", color: "#2563eb", textAlign: "center", mb: 4 }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Box>
                        {faqs.map((faq, index) => (
                            <Accordion 
                                key={index} 
                                expanded={faqOpen === index}
                                onChange={handleFaqToggle(index)}
                            >
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>

            {/* Success Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    severity="success" 
                    onClose={() => setOpenSnackbar(false)}
                    sx={{ width: '100%' }}
                >
                    Thank you for your message! We'll get back to you within 24 hours.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;