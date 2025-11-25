import React from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Chip,
    LinearProgress,
    Button,
    AppBar,
    Toolbar,
    IconButton
} from "@mui/material";
import {
    Person as PersonIcon,
    Assignment as AssignmentIcon,
    Event as EventIcon,
    Notifications as NotificationsIcon,
    Book as BookIcon,
    Grade as GradeIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
    const navigate = useNavigate();

    // Sample data - in real app, this would come from backend
    const studentData = {
        name: "Alex Johnson",
        studentId: "STU2024001",
        major: "Computer Science",
        semester: "Fall 2024",
        gpa: 3.75,
        creditsCompleted: 45,
        totalCredits: 120,
        courses: [
            {
                code: "CS101",
                name: "Introduction to Programming",
                time: "Mon/Wed 9:00-10:30",
                room: "Virtual",
                instructor: "Dr. Smith"
            },
            {
                code: "MATH201",
                name: "Calculus II",
                time: "Tue/Thu 11:00-12:30",
                room: "Virtual",
                instructor: "Dr. Chen"
            },
            {
                code: "ENG102",
                name: "Academic Writing",
                time: "Mon/Wed 14:00-15:30",
                room: "Virtual",
                instructor: "Prof. Davis"
            },
            {
                code: "PHY101",
                name: "Physics Fundamentals",
                time: "Tue/Thu 13:00-14:30",
                room: "Virtual",
                instructor: "Dr. Wilson"
            }
        ],
        assignments: [
            {
                course: "CS101",
                title: "Programming Project 1",
                dueDate: "2024-12-15",
                status: "pending",
                priority: "high"
            },
            {
                course: "MATH201",
                title: "Chapter 5 Exercises",
                dueDate: "2024-12-12",
                status: "pending",
                priority: "medium"
            },
            {
                course: "ENG102",
                title: "Research Paper Draft",
                dueDate: "2024-12-10",
                status: "completed",
                priority: "high"
            },
            {
                course: "PHY101",
                title: "Lab Report 3",
                dueDate: "2024-12-08",
                status: "pending",
                priority: "low"
            }
        ],
        announcements: [
            {
                title: "Winter Break Schedule",
                date: "2024-12-01",
                priority: "high",
                description: "University will be closed from Dec 20 to Jan 5"
            },
            {
                title: "Library Extended Hours",
                date: "2024-12-02",
                priority: "medium",
                description: "Library open until midnight during finals"
            },
            {
                title: "Career Fair Registration",
                date: "2024-11-28",
                priority: "high",
                description: "Register for the Spring Career Fair by Dec 15"
            },
            {
                title: "Scholarship Applications",
                date: "2024-11-25",
                priority: "medium",
                description: "Spring scholarship applications now open"
            }
        ],
        grades: [
            {
                course: "CS101",
                assignment: "Midterm Exam",
                score: 92,
                maxScore: 100,
                weight: 30
            },
            {
                course: "MATH201",
                assignment: "Quiz 3",
                score: 88,
                maxScore: 100,
                weight: 15
            },
            {
                course: "ENG102",
                assignment: "Essay 1",
                score: 95,
                maxScore: 100,
                weight: 20
            }
        ]
    };

    const handleLogout = () => {
        // In real app, clear authentication tokens
        navigate("/login");
    };

    const calculateProgress = () => {
        return (studentData.creditsCompleted / studentData.totalCredits) * 100;
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(20px)"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Student Portal
                    </Typography>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
                {/* Welcome Header */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome back, {studentData.name}!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {studentData.major} • {studentData.semester} • ID:{" "}
                        {studentData.studentId}
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {/* Quick Stats */}
                    <Grid item xs={12} md={3}>
                        <Card
                            sx={{
                                background:
                                    "linear-gradient(135deg, #2563eb, #7c3aed)",
                                color: "white"
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2
                                    }}
                                >
                                    <GradeIcon />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        GPA
                                    </Typography>
                                </Box>
                                <Typography variant="h4">
                                    {studentData.gpa}
                                </Typography>
                                <Typography variant="body2">
                                    Current Semester
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2
                                    }}
                                >
                                    <BookIcon />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        Courses
                                    </Typography>
                                </Box>
                                <Typography variant="h4">
                                    {studentData.courses.length}
                                </Typography>
                                <Typography variant="body2">
                                    Enrolled
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2
                                    }}
                                >
                                    <AssignmentIcon />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        Assignments
                                    </Typography>
                                </Box>
                                <Typography variant="h4">
                                    {
                                        studentData.assignments.filter(
                                            a => a.status === "pending"
                                        ).length
                                    }
                                </Typography>
                                <Typography variant="body2">Pending</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2
                                    }}
                                >
                                    <EventIcon />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        This Week
                                    </Typography>
                                </Box>
                                <Typography variant="h4">3</Typography>
                                <Typography variant="body2">
                                    Deadlines
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Academic Progress */}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Academic Progress
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2
                                    }}
                                >
                                    <Typography variant="body2" sx={{ mr: 2 }}>
                                        {studentData.creditsCompleted} /{" "}
                                        {studentData.totalCredits} credits
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {calculateProgress().toFixed(1)}%
                                        Complete
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={calculateProgress()}
                                    sx={{ height: 8, borderRadius: 4 }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Today's Schedule */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 3
                                    }}
                                >
                                    <EventIcon color="primary" />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        Today's Schedule
                                    </Typography>
                                </Box>
                                <List>
                                    {studentData.courses.map(
                                        (course, index) => (
                                            <ListItem key={index} divider>
                                                <ListItemText
                                                    primary={course.name}
                                                    secondary={
                                                        <Box>
                                                            <Typography variant="body2">
                                                                {course.time}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                            >
                                                                {course.room} •{" "}
                                                                {
                                                                    course.instructor
                                                                }
                                                            </Typography>
                                                        </Box>
                                                    }
                                                />
                                                <Chip
                                                    label={course.code}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Upcoming Assignments */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 3
                                    }}
                                >
                                    <AssignmentIcon color="primary" />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        Upcoming Assignments
                                    </Typography>
                                </Box>
                                <List>
                                    {studentData.assignments.map(
                                        (assignment, index) => (
                                            <ListItem key={index} divider>
                                                <ListItemText
                                                    primary={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center"
                                                            }}
                                                        >
                                                            <Typography variant="subtitle1">
                                                                {
                                                                    assignment.title
                                                                }
                                                            </Typography>
                                                            <Chip
                                                                label={
                                                                    assignment.priority
                                                                }
                                                                size="small"
                                                                color={
                                                                    assignment.priority ===
                                                                    "high"
                                                                        ? "error"
                                                                        : assignment.priority ===
                                                                          "medium"
                                                                        ? "warning"
                                                                        : "default"
                                                                }
                                                                sx={{ ml: 1 }}
                                                            />
                                                        </Box>
                                                    }
                                                    secondary={`${assignment.course} • Due: ${assignment.dueDate}`}
                                                />
                                                <Chip
                                                    label={
                                                        assignment.status ===
                                                        "completed"
                                                            ? "Completed"
                                                            : "Pending"
                                                    }
                                                    color={
                                                        assignment.status ===
                                                        "completed"
                                                            ? "success"
                                                            : "warning"
                                                    }
                                                    size="small"
                                                />
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Recent Grades */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 3
                                    }}
                                >
                                    <GradeIcon color="primary" />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        Recent Grades
                                    </Typography>
                                </Box>
                                <List>
                                    {studentData.grades.map((grade, index) => (
                                        <ListItem key={index} divider>
                                            <ListItemText
                                                primary={grade.assignment}
                                                secondary={grade.course}
                                            />
                                            <Box sx={{ textAlign: "right" }}>
                                                <Typography
                                                    variant="h6"
                                                    color="primary"
                                                >
                                                    {grade.score}%
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Weight: {grade.weight}%
                                                </Typography>
                                            </Box>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Announcements */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 3
                                    }}
                                >
                                    <NotificationsIcon color="primary" />
                                    <Typography variant="h6" sx={{ ml: 1 }}>
                                        Campus Announcements
                                    </Typography>
                                </Box>
                                <List>
                                    {studentData.announcements.map(
                                        (announcement, index) => (
                                            <ListItem key={index} divider>
                                                <ListItemText
                                                    primary={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center"
                                                            }}
                                                        >
                                                            <Typography variant="subtitle1">
                                                                {
                                                                    announcement.title
                                                                }
                                                            </Typography>
                                                            <Chip
                                                                label={
                                                                    announcement.priority
                                                                }
                                                                size="small"
                                                                color={
                                                                    announcement.priority ===
                                                                    "high"
                                                                        ? "error"
                                                                        : "default"
                                                                }
                                                                sx={{ ml: 2 }}
                                                            />
                                                        </Box>
                                                    }
                                                    secondary={
                                                        <Box>
                                                            <Typography variant="body2">
                                                                {
                                                                    announcement.description
                                                                }
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                            >
                                                                Posted:{" "}
                                                                {
                                                                    announcement.date
                                                                }
                                                            </Typography>
                                                        </Box>
                                                    }
                                                />
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default StudentDashboard;
