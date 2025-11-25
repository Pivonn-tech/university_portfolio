import React from 'react';
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
  Button,
  AppBar,
  Toolbar,
  IconButton,
  LinearProgress
} from '@mui/material';
import {
  Person as PersonIcon,
  Class as ClassIcon,
  Assignment as AssignmentIcon,
  Grade as GradeIcon,
  Groups as GroupsIcon,
  Schedule as ScheduleIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();

  const facultyData = {
    name: "Dr. Sarah Chen",
    title: "Associate Professor",
    department: "Computer Science",
    email: "sarah.chen@onnlytech.edu",
    office: "Tech Building 301",
    courses: [
      { 
        code: "CS101", 
        name: "Introduction to Programming", 
        students: 45, 
        assignments: 2,
        schedule: "Mon/Wed 9:00-10:30",
        room: "Virtual Lab"
      },
      { 
        code: "CS301", 
        name: "Data Structures", 
        students: 32, 
        assignments: 1,
        schedule: "Tue/Thu 11:00-12:30", 
        room: "Tech 205"
      },
      { 
        code: "CS450", 
        name: "Machine Learning", 
        students: 28, 
        assignments: 3,
        schedule: "Mon/Wed 14:00-15:30",
        room: "AI Lab"
      }
    ],
    pendingGrading: [
      { course: "CS101", assignment: "Final Project", submissions: 12, dueDate: "2024-12-10", graded: 3 },
      { course: "CS450", assignment: "Research Paper", submissions: 8, dueDate: "2024-12-12", graded: 2 },
      { course: "CS301", assignment: "Algorithm Analysis", submissions: 25, dueDate: "2024-12-08", graded: 15 }
    ],
    officeHours: [
      { day: "Monday", time: "2:00 PM - 4:00 PM", location: "Virtual", type: "virtual" },
      { day: "Wednesday", time: "10:00 AM - 12:00 PM", location: "Tech Building 301", type: "in-person" },
      { day: "Friday", time: "1:00 PM - 3:00 PM", location: "Virtual", type: "virtual" }
    ],
    recentAnnouncements: [
      { title: "Final Exam Schedule", date: "2024-12-01", course: "CS101", priority: "high" },
      { title: "Office Hours Change", date: "2024-11-28", course: "All", priority: "medium" },
      { title: "Research Grant Deadline", date: "2024-11-25", course: "CS450", priority: "high" }
    ]
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const calculateGradingProgress = (assignment) => {
    return (assignment.graded / assignment.submissions) * 100;
  };

  return (
    <>
      <AppBar 
        position="fixed"
        sx={{ 
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Faculty Portal
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {facultyData.name}!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {facultyData.title} • {facultyData.department} Department
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {facultyData.email} • Office: {facultyData.office}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Quick Stats */}
          <Grid item xs={12} md={3}>
            <Card sx={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ClassIcon />
                  <Typography variant="h6" sx={{ ml: 1 }}>Courses</Typography>
                </Box>
                <Typography variant="h4">{facultyData.courses.length}</Typography>
                <Typography variant="body2">Teaching This Semester</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <GroupsIcon />
                  <Typography variant="h6" sx={{ ml: 1 }}>Students</Typography>
                </Box>
                <Typography variant="h4">
                  {facultyData.courses.reduce((total, course) => total + course.students, 0)}
                </Typography>
                <Typography variant="body2">Total Students</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AssignmentIcon />
                  <Typography variant="h6" sx={{ ml: 1 }}>Assignments</Typography>
                </Box>
                <Typography variant="h4">
                  {facultyData.courses.reduce((total, course) => total + course.assignments, 0)}
                </Typography>
                <Typography variant="body2">Active</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <GradeIcon />
                  <Typography variant="h6" sx={{ ml: 1 }}>Pending</Typography>
                </Box>
                <Typography variant="h4">
                  {facultyData.pendingGrading.reduce((total, item) => total + (item.submissions - item.graded), 0)}
                </Typography>
                <Typography variant="body2">To Grade</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* My Courses */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ClassIcon color="primary" />
                  <Typography variant="h6" sx={{ ml: 1 }}>My Courses</Typography>
                </Box>
                <List>
                  {facultyData.courses.map((course, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        primary={course.name}
                        secondary={
                          <Box>
                            <Typography variant="body2">{course.schedule}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {course.students} students • {course.assignments} assignments • {course.room}
                            </Typography>
                          </Box>
                        }
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Button variant="outlined" size="small">Manage</Button>
                        <Chip label={course.code} size="small" variant="outlined" />
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Office Hours */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ScheduleIcon color="primary" />
                  <Typography variant="h6" sx={{ ml: 1 }}>Office Hours</Typography>
                </Box>
                <List>
                  {facultyData.officeHours.map((hours, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        primary={`${hours.day}: ${hours.time}`}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2">{hours.location}</Typography>
                            <Chip 
                              label={hours.type} 
                              size="small" 
                              color={hours.type === 'virtual' ? 'primary' : 'default'}
                              sx={{ ml: 1 }}
                            />
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Schedule Additional Hours
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Pending Grading */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <GradeIcon color="primary" />
                  <Typography variant="h6" sx={{ ml: 1 }}>Pending Grading</Typography>
                </Box>
                <Grid container spacing={2}>
                  {facultyData.pendingGrading.map((assignment, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                            <Box>
                              <Typography variant="h6" gutterBottom>
                                {assignment.assignment}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {assignment.course} • Due: {assignment.dueDate}
                              </Typography>
                            </Box>
                            <Chip 
                              label={`${assignment.graded}/${assignment.submissions}`} 
                              color="primary" 
                              size="small" 
                            />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="body2" sx={{ mr: 2 }}>
                              Progress: {calculateGradingProgress(assignment).toFixed(1)}%
                            </Typography>
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={calculateGradingProgress(assignment)} 
                            sx={{ height: 6, borderRadius: 3, mb: 2 }}
                          />
                          <Button variant="outlined" size="small" fullWidth>
                            Grade Submissions
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Announcements */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PersonIcon color="primary" />
                  <Typography variant="h6" sx={{ ml: 1 }}>My Announcements</Typography>
                </Box>
                <List>
                  {facultyData.recentAnnouncements.map((announcement, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="subtitle1">{announcement.title}</Typography>
                            <Chip 
                              label={announcement.priority} 
                              size="small" 
                              color={announcement.priority === 'high' ? 'error' : 'default'}
                              sx={{ ml: 2 }}
                            />
                          </Box>
                        }
                        secondary={`${announcement.course} • Posted: ${announcement.date}`}
                      />
                      <Button variant="text" size="small">Edit</Button>
                    </ListItem>
                  ))}
                </List>
                <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                  Create New Announcement
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FacultyDashboard;