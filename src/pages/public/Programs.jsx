import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tabs,
  Tab,
  AppBar
} from '@mui/material'
import {
  Computer,
  Security,
  Cloud,
  Smartphone,
  TrendingUp,
  DataArray,
  Schedule,
  School,
  LocationOn,
  Close,
  PersonAdd,
  Info,
  Book,
  Work
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Programs = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  const [selectedProgram, setSelectedProgram] = React.useState(null)
  const [tabValue, setTabValue] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const programs = {
    undergraduate: [
      {
        icon: <Computer sx={{ fontSize: 48 }} />,
        title: 'Computer Science',
        degree: 'B.Sc. Computer Science',
        duration: '4 Years',
        credits: '120 Credits',
        description: 'Master programming, algorithms, data structures, and software engineering. Build scalable applications and systems.',
        courses: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Operating Systems', 'Computer Networks', 'Web Development'],
        career: 'Software Engineer, Full-Stack Developer, Systems Analyst, DevOps Engineer',
        color: '#2563eb',
        requirements: ['High School Diploma', 'Math & Science Background', 'Programming Experience Preferred'],
        tuition: '$8,500/year',
        applicationDeadline: 'August 15, 2024'
      },
      {
        icon: <DataArray sx={{ fontSize: 48 }} />,
        title: 'Data Science',
        degree: 'B.Sc. Data Science',
        duration: '4 Years',
        credits: '120 Credits',
        description: 'Become an expert in AI, machine learning, statistical analysis, and big data processing with real-world datasets.',
        courses: ['Machine Learning', 'Statistical Analysis', 'Big Data', 'Data Visualization', 'Deep Learning', 'Python Programming', 'SQL Databases', 'Business Intelligence'],
        career: 'Data Scientist, ML Engineer, Data Analyst, AI Specialist, Business Intelligence Analyst',
        color: '#7c3aed',
        requirements: ['High School Diploma', 'Strong Math Background', 'Statistics Knowledge'],
        tuition: '$9,000/year',
        applicationDeadline: 'August 15, 2024'
      },
      {
        icon: <Security sx={{ fontSize: 48 }} />,
        title: 'Cybersecurity',
        degree: 'B.Sc. Cybersecurity',
        duration: '4 Years',
        credits: '120 Credits',
        description: 'Protect digital assets, combat cyber threats, and learn ethical hacking, network security, and digital forensics.',
        courses: ['Network Security', 'Ethical Hacking', 'Digital Forensics', 'Cryptography', 'Cyber Law', 'Incident Response', 'Security Operations', 'Risk Management'],
        career: 'Security Analyst, Penetration Tester, Security Architect, CISO, Security Consultant',
        color: '#059669',
        requirements: ['High School Diploma', 'IT Background', 'Problem-Solving Skills'],
        tuition: '$9,200/year',
        applicationDeadline: 'August 15, 2024'
      },
      {
        icon: <Cloud sx={{ fontSize: 48 }} />,
        title: 'Cloud Computing',
        degree: 'B.Sc. Cloud Computing',
        duration: '4 Years',
        credits: '120 Credits',
        description: 'Master AWS, Azure, Google Cloud platforms. Learn cloud architecture, DevOps, and scalable infrastructure design.',
        courses: ['Cloud Architecture', 'DevOps', 'Containerization', 'Serverless Computing', 'Cloud Security', 'Infrastructure as Code', 'Microservices', 'Cloud Networking'],
        career: 'Cloud Architect, DevOps Engineer, Cloud Consultant, Solutions Architect, SRE',
        color: '#dc2626',
        requirements: ['High School Diploma', 'Basic Programming Knowledge', 'Networking Fundamentals'],
        tuition: '$9,500/year',
        applicationDeadline: 'August 15, 2024'
      },
      {
        icon: <Smartphone sx={{ fontSize: 48 }} />,
        title: 'Mobile Development',
        degree: 'B.Sc. Mobile Development',
        duration: '4 Years',
        credits: '120 Credits',
        description: 'Build cutting-edge iOS and Android applications using modern frameworks like React Native, Flutter, and Swift.',
        courses: ['Mobile UI/UX', 'React Native', 'Flutter', 'iOS Development', 'Android Development', 'Cross-Platform Development', 'Mobile Security', 'App Publishing'],
        career: 'Mobile Developer, App Architect, UI/UX Developer, Mobile Team Lead, App Entrepreneur',
        color: '#ea580c',
        requirements: ['High School Diploma', 'Creative Mindset', 'Basic Programming Skills'],
        tuition: '$8,800/year',
        applicationDeadline: 'August 15, 2024'
      },
      {
        icon: <TrendingUp sx={{ fontSize: 48 }} />,
        title: 'Tech Business',
        degree: 'B.Sc. Technology Business',
        duration: '4 Years',
        credits: '120 Credits',
        description: 'Combine technology with entrepreneurial skills. Learn startup development, product management, and tech innovation.',
        courses: ['Tech Entrepreneurship', 'Product Management', 'Digital Marketing', 'Business Analytics', 'Innovation Strategy', 'Venture Capital', 'Tech Law', 'Strategic Management'],
        career: 'Product Manager, Tech Entrepreneur, Business Analyst, Startup Founder, Innovation Manager',
        color: '#ca8a04',
        requirements: ['High School Diploma', 'Business Interest', 'Leadership Potential'],
        tuition: '$8,200/year',
        applicationDeadline: 'August 15, 2024'
      }
    ],
    graduate: [
      {
        icon: <Computer sx={{ fontSize: 48 }} />,
        title: 'Advanced Computer Science',
        degree: 'M.Sc. Computer Science',
        duration: '2 Years',
        credits: '60 Credits',
        description: 'Advanced topics in artificial intelligence, distributed systems, and software architecture for experienced developers.',
        courses: ['Advanced Algorithms', 'Distributed Systems', 'AI Research', 'Software Architecture', 'Research Methods'],
        career: 'Senior Software Engineer, Research Scientist, Technical Lead, AI Specialist',
        color: '#2563eb',
        requirements: ['B.Sc. in CS or related field', '3.0+ GPA', 'Programming Portfolio'],
        tuition: '$12,000/year',
        applicationDeadline: 'July 1, 2024'
      },
      {
        icon: <DataArray sx={{ fontSize: 48 }} />,
        title: 'Data Science & AI',
        degree: 'M.Sc. Data Science',
        duration: '2 Years',
        credits: '60 Credits',
        description: 'Deep dive into machine learning, neural networks, and advanced statistical methods for data professionals.',
        courses: ['Deep Learning', 'Advanced Statistics', 'Big Data Systems', 'AI Ethics', 'Research Project'],
        career: 'Senior Data Scientist, AI Researcher, ML Engineer, Data Architect',
        color: '#7c3aed',
        requirements: ['B.Sc. in STEM field', 'Strong Math Background', 'Programming Experience'],
        tuition: '$13,000/year',
        applicationDeadline: 'July 1, 2024'
      }
    ]
  }

  const handleLearnMore = (program) => {
    setSelectedProgram(program)
  }

  const handleCloseDialog = () => {
    setSelectedProgram(null)
  }

  const handleApplyNow = () => {
    navigate('/apply')
  }

  const handleQuickApply = (programTitle) => {
    navigate('/apply', { state: { selectedProgram: programTitle } })
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc', pt: 4 }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white', 
        py: 8,
        mb: 6
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Academic Programs
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Discover our cutting-edge programs designed to prepare you for the future of technology
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Program Tabs */}
        <Box sx={{ mb: 6 }}>
          <AppBar position="static" sx={{ bgcolor: 'white', color: 'primary.main', borderRadius: 2 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Undergraduate Programs" />
              <Tab label="Graduate Programs" />
            </Tabs>
          </AppBar>
        </Box>

        {/* Programs Grid */}
        <Grid container spacing={4}>
          {programs[tabValue === 0 ? 'undergraduate' : 'graduate'].map((program, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ 
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={2}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          mx: 'auto'
                        }}
                      >
                        {program.icon}
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: program.color }}>
                        {program.title}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        {program.degree}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                        {program.description}
                      </Typography>
                      
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip 
                          icon={<Schedule />} 
                          label={program.duration} 
                          variant="outlined" 
                          size="small" 
                        />
                        <Chip 
                          icon={<Book />} 
                          label={program.credits} 
                          variant="outlined" 
                          size="small" 
                        />
                        <Chip 
                          icon={<Work />} 
                          label={tabValue === 0 ? "Bachelor's" : "Master's"} 
                          variant="outlined" 
                          size="small" 
                        />
                      </Stack>

                      <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Career Paths: {program.career}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                          Key Courses
                        </Typography>
                        <Stack spacing={1} sx={{ mb: 3 }}>
                          {program.courses.slice(0, 4).map((course, idx) => (
                            <Typography key={idx} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ width: 6, height: 6, bgcolor: program.color, borderRadius: '50%', mr: 1 }} />
                              {course}
                            </Typography>
                          ))}
                          {program.courses.length > 4 && (
                            <Typography variant="body2" color="primary" sx={{ fontStyle: 'italic' }}>
                              +{program.courses.length - 4} more courses...
                            </Typography>
                          )}
                        </Stack>
                        
                        <Stack spacing={1}>
                          <Button 
                            variant="contained" 
                            fullWidth
                            startIcon={<Info />}
                            onClick={() => handleLearnMore(program)}
                            sx={{ 
                              background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                              '&:hover': {
                                background: `linear-gradient(135deg, ${program.color}dd, ${program.color})`,
                                transform: 'translateY(-2px)'
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            Program Details
                          </Button>
                          <Button 
                            variant="outlined" 
                            fullWidth
                            startIcon={<PersonAdd />}
                            onClick={() => handleQuickApply(program.title)}
                            sx={{ 
                              borderColor: program.color,
                              color: program.color,
                              '&:hover': {
                                bgcolor: `${program.color}11`,
                                borderColor: program.color
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            Quick Apply
                          </Button>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Join thousands of students who have transformed their careers at ONNLY-TECH UNIVERSITY
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large"
              startIcon={<PersonAdd />}
              onClick={handleApplyNow}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Start Application
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<School />}
              onClick={() => navigate('/admissions')}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Admissions Info
            </Button>
          </Stack>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              Applications for 2024 are now open
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Program Details Dialog */}
      <Dialog 
        open={!!selectedProgram} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProgram && (
          <>
            <DialogTitle>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h2" sx={{ color: selectedProgram.color, fontWeight: 'bold' }}>
                  {selectedProgram.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <Close />
                </IconButton>
              </Box>
              <Typography variant="h6" color="text.secondary">
                {selectedProgram.degree}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Program Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProgram.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    Program Details
                  </Typography>
                  <Stack spacing={1}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" fontWeight="bold">Duration:</Typography>
                      <Typography variant="body2">{selectedProgram.duration}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" fontWeight="bold">Credits:</Typography>
                      <Typography variant="body2">{selectedProgram.credits}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" fontWeight="bold">Tuition:</Typography>
                      <Typography variant="body2">{selectedProgram.tuition}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" fontWeight="bold">Application Deadline:</Typography>
                      <Typography variant="body2">{selectedProgram.applicationDeadline}</Typography>
                    </Box>
                  </Stack>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    Admission Requirements
                  </Typography>
                  <Stack spacing={1}>
                    {selectedProgram.requirements.map((req, idx) => (
                      <Typography key={idx} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 6, height: 6, bgcolor: selectedProgram.color, borderRadius: '50%', mr: 1 }} />
                        {req}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Career Opportunities
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {selectedProgram.career}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                    Complete Course List
                  </Typography>
                  <Stack spacing={1}>
                    {selectedProgram.courses.map((course, idx) => (
                      <Typography key={idx} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 6, height: 6, bgcolor: selectedProgram.color, borderRadius: '50%', mr: 1 }} />
                        {course}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={handleCloseDialog}>
                Close
              </Button>
              <Button 
                variant="contained" 
                startIcon={<PersonAdd />}
                onClick={() => {
                  handleQuickApply(selectedProgram.title)
                  handleCloseDialog()
                }}
                sx={{ 
                  background: `linear-gradient(135deg, ${selectedProgram.color}, ${selectedProgram.color}dd)`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${selectedProgram.color}dd, ${selectedProgram.color})`
                  }
                }}
              >
                Apply to This Program
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  )
}

export default Programs