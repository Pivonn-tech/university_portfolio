import React from 'react'
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
} from '@mui/material'
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
  Schedule
} from '@mui/icons-material'

function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const programs = [
    { 
      icon: <Computer sx={{ fontSize: 48 }} />, 
      title: 'Computer Science', 
      description: 'Master programming, algorithms, data structures, and software engineering principles. Build scalable applications and systems.',
      color: '#2563eb'
    },
    { 
      icon: <Cloud sx={{ fontSize: 48 }} />, 
      title: 'Data Science', 
      description: 'Become an expert in AI, machine learning, statistical analysis, and big data processing. Work with real-world datasets.',
      color: '#7c3aed'
    },
    { 
      icon: <Security sx={{ fontSize: 48 }} />, 
      title: 'Cybersecurity', 
      description: 'Protect digital assets, combat cyber threats, and learn ethical hacking, network security, and digital forensics.',
      color: '#059669'
    },
    { 
      icon: <Cloud sx={{ fontSize: 48 }} />, 
      title: 'Cloud Computing', 
      description: 'Master AWS, Azure, Google Cloud platforms. Learn cloud architecture, DevOps, and scalable infrastructure design.',
      color: '#dc2626'
    },
    { 
      icon: <Smartphone sx={{ fontSize: 48 }} />, 
      title: 'Mobile Development', 
      description: 'Build cutting-edge iOS and Android applications using modern frameworks like React Native, Flutter, and Swift.',
      color: '#ea580c'
    },
    { 
      icon: <TrendingUp sx={{ fontSize: 48 }} />, 
      title: 'Tech Business', 
      description: 'Combine technology with entrepreneurial skills. Learn startup development, product management, and tech innovation.',
      color: '#ca8a04'
    }
  ]

  const stats = [
    { number: '5,000+', label: 'Students Enrolled', icon: <People sx={{ fontSize: 40 }} /> },
    { number: '120+', label: 'Expert Faculty', icon: <School sx={{ fontSize: 40 }} /> },
    { number: '95%', label: 'Employment Rate', icon: <AssignmentTurnedIn sx={{ fontSize: 40 }} /> },
    { number: '50+', label: 'Programs Offered', icon: <TrendingUp sx={{ fontSize: 40 }} /> }
  ]

  const campusFeatures = [
    { icon: <LibraryBooks sx={{ fontSize: 48 }} />, title: 'Digital Library', description: '24/7 access to millions of online resources, e-books, and research papers' },
    { icon: <SportsBasketball sx={{ fontSize: 48 }} />, title: 'Innovation Hub', description: 'State-of-the-art labs, maker spaces, and collaborative environments' },
    { icon: <Restaurant sx={{ fontSize: 48 }} />, title: 'Smart Cafeteria', description: 'Healthy meals, coffee shops, and collaborative study spaces' },
    { icon: <Schedule sx={{ fontSize: 48 }} />, title: 'Flexible Scheduling', description: 'Day, evening, and weekend classes to fit your lifestyle' }
  ]

  const footerLinks = {
    'Academics': ['Undergraduate Programs', 'Graduate Programs', 'Online Learning', 'Research Centers'],
    'Admissions': ['Apply Now', 'Tuition & Fees', 'Financial Aid', 'International Students'],
    'Campus Life': ['Student Housing', 'Clubs & Organizations', 'Sports & Recreation', 'Events Calendar']
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      {/* Enhanced Hero Section */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white', 
        py: { xs: 10, md: 15 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            fontSize: { xs: '2.8rem', md: '4rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            ONNLY-TECH UNIVERSITY
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ 
            opacity: 0.95, 
            mb: 4,
            fontWeight: 300,
            fontSize: { xs: '1.5rem', md: '2.2rem' }
          }}>
            Where <strong style={{fontWeight: 700}}>Innovation</strong> Meets <strong style={{fontWeight: 700}}>Excellence</strong>
          </Typography>
          <Typography variant="h6" sx={{ 
            opacity: 0.9,
            mb: 5,
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.7,
            maxWidth: 800,
            mx: 'auto'
          }}>
            Africa's premier institution for technology education. 
            Shaping the next generation of tech leaders, innovators, 
            and entrepreneurs through cutting-edge programs and world-class facilities.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                fontWeight: 'bold',
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 3,
                '&:hover': {
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              🚀 Apply Now
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 3,
                '&:hover': {
                  bgcolor: 'white',
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              🎓 Virtual Tour
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box textAlign="center">
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: 'white',
                      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" component="div" color="primary.main" fontWeight="bold">
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight="bold">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Programs Section */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Cutting-Edge Programs
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
              Choose from our industry-leading programs designed to prepare you for the future of technology
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                  }
                }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        background: `linear-gradient(135deg, ${program.color}, ${alpha(program.color, 0.8)})`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        color: 'white'
                      }}
                    >
                      {program.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {program.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 4 }}>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderColor: program.color, 
                        color: program.color,
                        fontWeight: 'bold',
                        '&:hover': {
                          bgcolor: alpha(program.color, 0.1),
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

      {/* Campus Life Section */}
      <Box sx={{ 
        background: `linear-gradient(135deg, #1e293b 0%, #334155 100%)`,
        color: 'white', 
        py: 12 
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#60a5fa' }}>
              Campus Life
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Experience the dynamic and inclusive community at ONNLY-TECH UNIVERSITY
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {campusFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  p: 4, 
                  borderRadius: 3, 
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Box sx={{ color: '#60a5fa', mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <WorkspacePremium sx={{ fontSize: 80, color: 'primary.main', mb: 4 }} />
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Start Your Tech Journey
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 5, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
              Join thousands of successful graduates who transformed their futures at ONNLY-TECH UNIVERSITY
            </Typography>

            {/* Contact Info */}
            <Box sx={{ 
              mb: 5, 
              p: 4, 
              bgcolor: 'primary.main', 
              color: 'white', 
              borderRadius: 3, 
              display: 'inline-block',
              boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
            }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email sx={{ fontSize: 32 }} />
                <Box textAlign="left">
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Contact Admissions
                  </Typography>
                  <Typography variant="body1">
                    onnlytechuni@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ mb: 4 }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  fontWeight: 'bold',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                📧 Apply Today
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'primary.main', 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                📚 View Programs
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
              <LocationOn sx={{ color: 'text.secondary' }} />
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                Tech Innovation Park • Digital District • Africa
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#0f172a', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#60a5fa' }}>
                ONNLY-TECH UNIVERSITY
              </Typography>
              <Typography sx={{ opacity: 0.8, lineHeight: 1.6, mb: 3 }}>
                Africa's premier institution for technology education, innovation, and research. 
                Empowering the next generation of tech leaders since 2010.
              </Typography>
              <Typography sx={{ opacity: 0.8 }}>
                <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
                onnlytechuni@gmail.com
              </Typography>
            </Grid>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <Grid item xs={6} md={2} key={category}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                  {category}
                </Typography>
                <Stack spacing={1}>
                  {links.map((link, index) => (
                    <Typography 
                      key={index} 
                      sx={{ 
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        '&:hover': { 
                          color: '#60a5fa',
                        },
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Footer Bottom */}
          <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © 2025 ONNLY-TECH UNIVERSITY. All rights reserved. | Privacy Policy | Terms of Service
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
