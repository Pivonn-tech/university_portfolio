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
  useMediaQuery
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
  LocationOn
} from '@mui/icons-material'

const Programs = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const programs = [
    {
      icon: <Computer sx={{ fontSize: 48 }} />,
      title: 'Computer Science',
      degree: 'B.Sc. Computer Science',
      duration: '4 Years',
      description: 'Master programming, algorithms, data structures, and software engineering. Build scalable applications and systems.',
      courses: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
      career: 'Software Engineer, Full-Stack Developer, Systems Analyst',
      color: '#2563eb'
    },
    {
      icon: <DataArray sx={{ fontSize: 48 }} />,
      title: 'Data Science',
      degree: 'B.Sc. Data Science',
      duration: '4 Years',
      description: 'Become an expert in AI, machine learning, statistical analysis, and big data processing with real-world datasets.',
      courses: ['Machine Learning', 'Statistical Analysis', 'Big Data', 'Data Visualization', 'Deep Learning'],
      career: 'Data Scientist, ML Engineer, Data Analyst, AI Specialist',
      color: '#7c3aed'
    },
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: 'Cybersecurity',
      degree: 'B.Sc. Cybersecurity',
      duration: '4 Years',
      description: 'Protect digital assets, combat cyber threats, and learn ethical hacking, network security, and digital forensics.',
      courses: ['Network Security', 'Ethical Hacking', 'Digital Forensics', 'Cryptography', 'Cyber Law'],
      career: 'Security Analyst, Penetration Tester, Security Architect',
      color: '#059669'
    },
    {
      icon: <Cloud sx={{ fontSize: 48 }} />,
      title: 'Cloud Computing',
      degree: 'B.Sc. Cloud Computing',
      duration: '4 Years',
      description: 'Master AWS, Azure, Google Cloud platforms. Learn cloud architecture, DevOps, and scalable infrastructure design.',
      courses: ['Cloud Architecture', 'DevOps', 'Containerization', 'Serverless Computing', 'Cloud Security'],
      career: 'Cloud Architect, DevOps Engineer, Cloud Consultant',
      color: '#dc2626'
    },
    {
      icon: <Smartphone sx={{ fontSize: 48 }} />,
      title: 'Mobile Development',
      degree: 'B.Sc. Mobile Development',
      duration: '4 Years',
      description: 'Build cutting-edge iOS and Android applications using modern frameworks like React Native, Flutter, and Swift.',
      courses: ['Mobile UI/UX', 'React Native', 'Flutter', 'iOS Development', 'Android Development'],
      career: 'Mobile Developer, App Architect, UI/UX Developer',
      color: '#ea580c'
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      title: 'Tech Business',
      degree: 'B.Sc. Technology Business',
      duration: '4 Years',
      description: 'Combine technology with entrepreneurial skills. Learn startup development, product management, and tech innovation.',
      courses: ['Tech Entrepreneurship', 'Product Management', 'Digital Marketing', 'Business Analytics', 'Innovation Strategy'],
      career: 'Product Manager, Tech Entrepreneur, Business Analyst',
      color: '#ca8a04'
    }
  ]

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
        {/* Programs Grid */}
        <Grid container spacing={4}>
          {programs.map((program, index) => (
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
                      
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        <Chip 
                          icon={<Schedule />} 
                          label={program.duration} 
                          variant="outlined" 
                          size="small" 
                        />
                        <Chip 
                          icon={<School />} 
                          label="Bachelor's Degree" 
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
                        <Stack spacing={1}>
                          {program.courses.map((course, idx) => (
                            <Typography key={idx} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ width: 6, height: 6, bgcolor: program.color, borderRadius: '50%', mr: 1 }} />
                              {course}
                            </Typography>
                          ))}
                        </Stack>
                        <Button 
                          variant="contained" 
                          fullWidth
                          sx={{ 
                            mt: 3,
                            background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${program.color}dd, ${program.color})`,
                              transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Learn More
                        </Button>
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
          <Button 
            variant="contained" 
            size="large"
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
            Apply Now
          </Button>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              Applications for 2024 are now open
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Programs
