import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    Stack,
    useTheme,
    useMediaQuery,
    alpha
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Import configuration
import { universityConfig } from "../../config/universityData";

// Import all icons directly
import {
    Computer,
    Security,
    Cloud,
    Smartphone,
    TrendingUp,
    School,
    WorkspacePremium,
    LocationOn,
    Email,
    People,
    AssignmentTurnedIn,
    LibraryBooks,
    SportsBasketball,
    Restaurant,
    Schedule,
    Login,
    PersonAdd,
    Dashboard,
    PlayArrow,
    ArrowForward
} from "@mui/icons-material";

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    // Destructure config data
    const {
        university,
        programs,
        campusFeatures,
        digitalFeatures,
        footerLinks
    } = universityConfig;

    // University Images (using Unsplash - free high-quality images)
    const images = {
        hero: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        campus: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        students:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        library:
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        graduation:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    };

    // Stats data from config
    const stats = [
        {
            number: university.stats.students,
            label: "Students Enrolled",
            icon: <People sx={{ fontSize: 40 }} />
        },
        {
            number: university.stats.faculty,
            label: "Expert Faculty",
            icon: <School sx={{ fontSize: 40 }} />
        },
        {
            number: university.stats.employmentRate,
            label: "Employment Rate",
            icon: <AssignmentTurnedIn sx={{ fontSize: 40 }} />
        },
        {
            number: university.stats.programs,
            label: "Programs Offered",
            icon: <TrendingUp sx={{ fontSize: 40 }} />
        }
    ];

    // Navigation handlers
    const handleApplyNow = () => {
        navigate("/apply");
    };

    const handleStudentPortal = () => {
        navigate("/login");
    };

    const handleViewPrograms = () => {
        navigate("/programs");
    };

    // Simple icon mapping
    const getIconComponent = iconName => {
        const iconMap = {
            Computer: <Computer sx={{ fontSize: 48 }} />,
            Cloud: <Cloud sx={{ fontSize: 48 }} />,
            Security: <Security sx={{ fontSize: 48 }} />,
            Smartphone: <Smartphone sx={{ fontSize: 48 }} />,
            TrendingUp: <TrendingUp sx={{ fontSize: 48 }} />,
            LibraryBooks: <LibraryBooks sx={{ fontSize: 48 }} />,
            SportsBasketball: <SportsBasketball sx={{ fontSize: 48 }} />,
            Restaurant: <Restaurant sx={{ fontSize: 48 }} />,
            Schedule: <Schedule sx={{ fontSize: 48 }} />,
            Dashboard: <Dashboard sx={{ fontSize: 48 }} />,
            PersonAdd: <PersonAdd sx={{ fontSize: 48 }} />,
            Login: <Login sx={{ fontSize: 48 }} />
        };
        return iconMap[iconName] || <School sx={{ fontSize: 48 }} />;
    };

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" }}>
            {/* Enhanced Hero Section with Background Image */}
            <Box
                sx={{
                    position: "relative",
                    color: "white",
                    py: { xs: 10, md: 15 },
                    textAlign: "center",
                    overflow: "hidden",
                    background: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(37, 99, 235, 0.6)), url(${images.hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2.8rem", md: "4rem" },
                            textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
                        }}
                    >
                        {university.name}
                    </Typography>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            opacity: 0.95,
                            mb: 4,
                            fontWeight: 300,
                            fontSize: { xs: "1.5rem", md: "2.2rem" }
                        }}
                    >
                        {university.motto}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            opacity: 0.9,
                            mb: 5,
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            lineHeight: 1.7,
                            maxWidth: 800,
                            mx: "auto"
                        }}
                    >
                        {university.description}
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleApplyNow}
                            startIcon={<PersonAdd />}
                            sx={{
                                bgcolor: "white",
                                color: "primary.main",
                                fontWeight: "bold",
                                px: 5,
                                py: 1.5,
                                fontSize: "1.1rem",
                                borderRadius: 3,
                                "&:hover": {
                                    bgcolor: "grey.100",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                                },
                                transition: "all 0.3s ease"
                            }}
                        >
                            Apply Now
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={handleStudentPortal}
                            startIcon={<Login />}
                            sx={{
                                borderColor: "white",
                                color: "white",
                                fontWeight: "bold",
                                px: 4,
                                py: 1.5,
                                fontSize: "1.1rem",
                                borderRadius: 3,
                                "&:hover": {
                                    bgcolor: "white",
                                    color: "primary.main",
                                    transform: "translateY(-2px)"
                                },
                                transition: "all 0.3s ease"
                            }}
                        >
                            Student Portal
                        </Button>
                        <Button
                            variant="text"
                            size="large"
                            startIcon={<PlayArrow />}
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                px: 4,
                                py: 1.5,
                                fontSize: "1.1rem",
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.1)"
                                }
                            }}
                        >
                            Watch Tour
                        </Button>
                    </Stack>
                </Container>
            </Box>

            {/* Stats Section with Background */}
            <Box
                sx={{
                    py: 10,
                    bgcolor: "white",
                    background: `linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)`
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Box textAlign="center">
                                    <Box
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            bgcolor: "primary.main",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 3,
                                            color: "white",
                                            boxShadow:
                                                "0 10px 30px rgba(37, 99, 235, 0.3)"
                                        }}
                                    >
                                        {stat.icon}
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        component="div"
                                        color="primary.main"
                                        fontWeight="bold"
                                    >
                                        {stat.number}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                        fontWeight="bold"
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Campus Showcase Section */}
            <Box sx={{ py: 12, bgcolor: "white" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    height: 400,
                                    background: `url(${images.campus})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: "bold",
                                    color: "primary.main"
                                }}
                            >
                                World-Class Campus
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{ mb: 3, lineHeight: 1.6 }}
                            >
                                Experience our state-of-the-art facilities
                                designed for innovation and collaboration
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ mb: 4, lineHeight: 1.7 }}
                            >
                                Our 50-acre campus features cutting-edge
                                laboratories, collaborative workspaces, and
                                modern amenities that foster creativity and
                                technological advancement.
                            </Typography>
                            <Button
                                variant="outlined"
                                endIcon={<ArrowForward />}
                                sx={{
                                    borderColor: "primary.main",
                                    color: "primary.main",
                                    fontWeight: "bold",
                                    px: 4,
                                    py: 1.5
                                }}
                            >
                                Virtual Campus Tour
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* New Features Section */}
            <Box sx={{ py: 10, bgcolor: "grey.50" }}>
                <Container maxWidth="lg">
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                        >
                            Digital Campus Experience
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
                        >
                            Access our modern digital platforms designed to
                            enhance your learning and teaching experience
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {digitalFeatures.map((feature, index) => (
                            <Grid item xs={12} md={4} key={feature.id}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow:
                                                "0 20px 40px rgba(0,0,0,0.15)"
                                        }
                                    }}
                                >
                                    <CardContent
                                        sx={{ textAlign: "center", p: 4 }}
                                    >
                                        <Box
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                background: `linear-gradient(135deg, ${
                                                    feature.color
                                                }, ${alpha(
                                                    feature.color,
                                                    0.8
                                                )})`,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mx: "auto",
                                                mb: 3,
                                                color: "white"
                                            }}
                                        >
                                            {getIconComponent(feature.icon)}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            gutterBottom
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{ mb: 3, lineHeight: 1.6 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{ justifyContent: "center", pb: 4 }}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                navigate(feature.action)
                                            }
                                            sx={{
                                                bgcolor: feature.color,
                                                fontWeight: "bold",
                                                px: 4,
                                                "&:hover": {
                                                    bgcolor: feature.color,
                                                    opacity: 0.9,
                                                    transform:
                                                        "translateY(-2px)"
                                                },
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            {feature.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Enhanced Programs Section with Images */}
            <Box sx={{ py: 12, bgcolor: "white" }}>
                <Container maxWidth="lg">
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                        >
                            Cutting-Edge Programs
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
                        >
                            Choose from our industry-leading programs designed
                            to prepare you for the future of technology
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {programs.map((program, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={program.id}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        transition: "all 0.3s ease",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow:
                                                "0 20px 40px rgba(0,0,0,0.15)",
                                            "& .program-image": {
                                                transform: "scale(1.1)"
                                            }
                                        }
                                    }}
                                >
                                    {/* Program Image */}
                                    <Box
                                        className="program-image"
                                        sx={{
                                            height: 200,
                                            background: `linear-gradient(135deg, ${program.color}40, ${program.color}20), url(${images.lab})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            transition: "transform 0.3s ease"
                                        }}
                                    />
                                    <CardContent
                                        sx={{ textAlign: "center", p: 4 }}
                                    >
                                        <Box
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                background: `linear-gradient(135deg, ${
                                                    program.color
                                                }, ${alpha(
                                                    program.color,
                                                    0.8
                                                )})`,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mx: "auto",
                                                mb: 3,
                                                color: "white",
                                                marginTop: -6,
                                                position: "relative"
                                            }}
                                        >
                                            {getIconComponent(program.icon)}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            gutterBottom
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            {program.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{ mb: 3, lineHeight: 1.6 }}
                                        >
                                            {program.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{ justifyContent: "center", pb: 4 }}
                                    >
                                        <Button
                                            variant="outlined"
                                            onClick={() =>
                                                navigate("/programs")
                                            }
                                            sx={{
                                                borderColor: program.color,
                                                color: program.color,
                                                fontWeight: "bold",
                                                "&:hover": {
                                                    bgcolor: alpha(
                                                        program.color,
                                                        0.1
                                                    ),
                                                    borderColor: program.color
                                                }
                                            }}
                                        >
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Student Life Gallery */}
            <Box sx={{ py: 12, bgcolor: "grey.50" }}>
                <Container maxWidth="lg">
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                        >
                            Student Life Gallery
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}
                        >
                            Discover the vibrant campus community at{" "}
                            {university.name}
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Box
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    height: 400,
                                    background: `url(${images.students})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={3}>
                                <Box
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        height: 185,
                                        background: `url(${images.library})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                                    }}
                                />
                                <Box
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        height: 185,
                                        background: `url(${images.graduation})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                                    }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Campus Life Section */}
            <Box
                sx={{
                    background: `linear-gradient(135deg, #1e293b 0%, #334155 100%)`,
                    color: "white",
                    py: 12
                }}
            >
                <Container maxWidth="lg">
                    <Box textAlign="center" sx={{ mb: 8 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "#60a5fa" }}
                        >
                            Campus Life
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ opacity: 0.9, maxWidth: 600, mx: "auto" }}
                        >
                            Experience the dynamic and inclusive community at{" "}
                            {university.name}
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {campusFeatures.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={feature.id}>
                                <Box
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.1)",
                                        p: 4,
                                        borderRadius: 3,
                                        textAlign: "center",
                                        height: "100%",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            transform: "translateY(-5px)"
                                        }
                                    }}
                                >
                                    <Box sx={{ color: "#60a5fa", mb: 3 }}>
                                        {getIconComponent(feature.icon)}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ opacity: 0.9, lineHeight: 1.6 }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Final CTA Section with Background */}
            <Box
                sx={{
                    py: 12,
                    background: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(37, 99, 235, 0.8)), url(${images.graduation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white"
                }}
            >
                <Container maxWidth="md">
                    <Box textAlign="center">
                        <WorkspacePremium
                            sx={{ fontSize: 80, color: "white", mb: 4 }}
                        />
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "white" }}
                        >
                            Start Your Tech Journey
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                opacity: 0.9,
                                mb: 5,
                                maxWidth: 600,
                                mx: "auto",
                                lineHeight: 1.6
                            }}
                        >
                            Join thousands of successful graduates who
                            transformed their futures at {university.name}
                        </Typography>

                        {/* Contact Info */}
                        <Box
                            sx={{
                                mb: 5,
                                p: 4,
                                bgcolor: "rgba(255,255,255,0.2)",
                                borderRadius: 3,
                                display: "inline-block",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                            >
                                <Email sx={{ fontSize: 32 }} />
                                <Box textAlign="left">
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Contact Admissions
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ opacity: 0.9 }}
                                    >
                                        {university.contact.admissionsEmail}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={3}
                            justifyContent="center"
                            sx={{ mb: 4 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleApplyNow}
                                startIcon={<PersonAdd />}
                                sx={{
                                    bgcolor: "white",
                                    color: "primary.main",
                                    fontWeight: "bold",
                                    px: 5,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    borderRadius: 3,
                                    "&:hover": {
                                        bgcolor: "grey.100",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Apply Today
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={handleViewPrograms}
                                startIcon={<School />}
                                sx={{
                                    borderColor: "white",
                                    color: "white",
                                    fontWeight: "bold",
                                    px: 5,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    borderRadius: 3,
                                    "&:hover": {
                                        bgcolor: "white",
                                        color: "primary.main",
                                        transform: "translateY(-2px)"
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                View Programs
                            </Button>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <LocationOn
                                sx={{ color: "rgba(255,255,255,0.8)" }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ opacity: 0.8, fontWeight: "bold" }}
                            >
                                {university.contact.address}
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: "#0f172a", color: "white", py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ fontWeight: "bold", color: "#60a5fa" }}
                            >
                                {university.name}
                            </Typography>
                            <Typography
                                sx={{ opacity: 0.8, lineHeight: 1.6, mb: 3 }}
                            >
                                {university.description}. Empowering the next
                                generation of tech leaders since{" "}
                                {university.founded}.
                            </Typography>
                            <Typography sx={{ opacity: 0.8 }}>
                                <Email
                                    sx={{ verticalAlign: "middle", mr: 1 }}
                                />
                                {university.contact.mainEmail}
                            </Typography>
                        </Grid>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(
                            ([category, links]) => (
                                <Grid item xs={6} md={2} key={category}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        sx={{ fontWeight: "bold", mb: 3 }}
                                    >
                                        {category}
                                    </Typography>
                                    <Stack spacing={1}>
                                        {links.map((link, index) => (
                                            <Typography
                                                key={index}
                                                sx={{
                                                    color: "rgba(255,255,255,0.7)",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        color: "#60a5fa"
                                                    },
                                                    transition:
                                                        "color 0.3s ease"
                                                }}
                                            >
                                                {link}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Grid>
                            )
                        )}
                    </Grid>

                    {/* Footer Bottom */}
                    <Box
                        sx={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            mt: 4,
                            pt: 4,
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.6 }}>
                            © 2025 {university.name}. All rights reserved. |
                            Privacy Policy | Terms of Service
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
