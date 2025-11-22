import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Chip,
    Stack
} from "@mui/material";
import {
    School,
    WorkspacePremium,
    Groups,
    LocationOn,
    History,
    Schedule
} from "@mui/icons-material";

const About = () => {
    const leadership = [
        {
            name: "Dr. Sarah Chen",
            role: "Chancellor & Founder",
            bio: "Former CTO at TechGlobal with 20+ years in technology education",
            expertise: ["AI Research", "EdTech Innovation"]
        },
        {
            name: "Prof. Michael Rodriguez",
            role: "Vice Chancellor, Academics",
            bio: "PhD in Computer Science from MIT, specializes in cybersecurity",
            expertise: ["Cybersecurity", "Network Systems"]
        },
        {
            name: "Dr. Amina Bello",
            role: "Dean of Engineering",
            bio: "Leading researcher in renewable energy systems and smart grids",
            expertise: ["Renewable Energy", "Smart Systems"]
        }
    ];

    const milestones = [
        { year: "2010", event: "ONNLY-TECH UNIVERSITY founded" },
        { year: "2013", event: "First graduating class with 95% employment" },
        { year: "2015", event: "Opened Innovation Hub and Research Center" },
        { year: "2018", event: "Achieved international accreditation" },
        { year: "2020", event: "Launched online learning platform" },
        { year: "2023", event: "Expanded to 50+ academic programs" }
    ];

    const values = [
        {
            icon: <School sx={{ fontSize: 48 }} />,
            title: "Excellence",
            description:
                "Maintaining highest standards in academics and research"
        },
        {
            icon: <WorkspacePremium sx={{ fontSize: 48 }} />,
            title: "Innovation",
            description: "Pushing boundaries in technology education"
        },
        {
            icon: <Groups sx={{ fontSize: 48 }} />,
            title: "Community",
            description: "Building inclusive learning environment"
        },
        {
            icon: <LocationOn sx={{ fontSize: 48 }} />,
            title: "Impact",
            description: "Creating real-world solutions"
        }
    ];

    const facilities = [
        {
            name: "Digital Innovation Hub",
            description: "State-of-the-art labs with cutting-edge technology",
            capacity: "500+ students"
        },
        {
            name: "Research Center",
            description: "Dedicated spaces for faculty and student research",
            capacity: "20 research labs"
        },
        {
            name: "Smart Library",
            description: "24/7 access to digital resources",
            capacity: "100,000+ volumes"
        },
        {
            name: "Collaboration Spaces",
            description: "Modern spaces for team projects",
            capacity: "50+ meeting rooms"
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
                        About ONNLY-TECH UNIVERSITY
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            opacity: 0.9,
                            maxWidth: 800,
                            mx: "auto",
                            lineHeight: 1.6
                        }}
                    >
                        Africa's premier institution for technology education,
                        innovation, and research since 2010
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg">
                {/* Mission & Vision */}
                <Grid container spacing={6} sx={{ mb: 8 }}>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: "100%",
                                transition: "transform 0.3s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <CardContent sx={{ p: 4, textAlign: "center" }}>
                                <School
                                    sx={{
                                        fontSize: 64,
                                        color: "#2563eb",
                                        mb: 3
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#2563eb"
                                    }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ lineHeight: 1.7, fontSize: "1.1rem" }}
                                >
                                    To provide world-class technology education
                                    that empowers students to become innovative
                                    leaders, drive technological advancement,
                                    and create positive impact in Africa and
                                    beyond through cutting-edge research and
                                    practical learning.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: "100%",
                                transition: "transform 0.3s",
                                "&:hover": { transform: "translateY(-4px)" }
                            }}
                        >
                            <CardContent sx={{ p: 4, textAlign: "center" }}>
                                <WorkspacePremium
                                    sx={{
                                        fontSize: 64,
                                        color: "#7c3aed",
                                        mb: 3
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#7c3aed"
                                    }}
                                >
                                    Our Vision
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ lineHeight: 1.7, fontSize: "1.1rem" }}
                                >
                                    To be Africa's leading center of excellence
                                    in technology education and innovation,
                                    recognized globally for producing graduates
                                    who transform industries and solve complex
                                    challenges through technology and
                                    entrepreneurship.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* History & Milestones */}
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
                        Our Journey
                    </Typography>
                    <Grid container spacing={4}>
                        {milestones.map((milestone, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card
                                    sx={{
                                        transition: "transform 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-4px)"
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 2
                                            }}
                                        >
                                            <History
                                                sx={{ color: "#2563eb", mr: 2 }}
                                            />
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "#2563eb"
                                                }}
                                            >
                                                {milestone.year}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1">
                                            {milestone.event}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Core Values */}
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
                        Our Values
                    </Typography>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box sx={{ textAlign: "center", p: 3 }}>
                                    <Box sx={{ color: "#2563eb", mb: 2 }}>
                                        {value.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {value.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Leadership */}
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
                        Leadership Team
                    </Typography>
                    <Grid container spacing={4}>
                        {leadership.map((leader, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    sx={{
                                        textAlign: "center",
                                        p: 3,
                                        height: "100%",
                                        transition: "transform 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-4px)"
                                        }
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: "auto",
                                            mb: 2,
                                            bgcolor: "#2563eb",
                                            fontSize: "2.5rem"
                                        }}
                                    >
                                        {leader.name
                                            .split(" ")
                                            .map(n => n[0])
                                            .join("")}
                                    </Avatar>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {leader.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color="#2563eb"
                                        gutterBottom
                                    >
                                        {leader.role}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ mb: 2, lineHeight: 1.6 }}
                                    >
                                        {leader.bio}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="center"
                                        flexWrap="wrap"
                                    >
                                        {leader.expertise.map((exp, idx) => (
                                            <Chip
                                                key={idx}
                                                label={exp}
                                                size="small"
                                                variant="outlined"
                                            />
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Facilities */}
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
                        Campus Facilities
                    </Typography>
                    <Grid container spacing={3}>
                        {facilities.map((facility, index) => (
                            <Grid item xs={12} sm={6} key={index}>
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
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {facility.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        {facility.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <LocationOn
                                            sx={{ color: "#2563eb", mr: 1 }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Capacity: {facility.capacity}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Accreditation */}
                <Box
                    sx={{
                        textAlign: "center",
                        py: 6,
                        bgcolor: "#2563eb",
                        color: "white",
                        borderRadius: 4
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        Internationally Accredited
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                        Recognized by leading accreditation bodies for
                        excellence in technology education
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                    >
                        <Chip
                            label="African Union Accreditation"
                            variant="outlined"
                            sx={{ color: "white", borderColor: "white" }}
                        />
                        <Chip
                            label="International Technology Standards"
                            variant="outlined"
                            sx={{ color: "white", borderColor: "white" }}
                        />
                        <Chip
                            label="Quality Education Certified"
                            variant="outlined"
                            sx={{ color: "white", borderColor: "white" }}
                        />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
