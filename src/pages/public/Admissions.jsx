import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  CheckCircle,
  Schedule,
  School,
  Payment,
  Assignment,
  Person,
  CalendarToday,
  Description
} from '@mui/icons-material'

const Admissions = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const steps = [
    {
      label: 'Application',
      description: 'Submit your online application with required documents',
      icon: <Assignment />,
      details: ['Online application form', 'Academic transcripts', 'Personal statement', 'Letters of recommendation']
    },
    {
      label: 'Review',
      description: 'Our admissions committee reviews your application',
      icon: <Description />,
      details: ['Academic qualifications assessment', 'Personal statement evaluation', 'Recommendation letters review']
    },
    {
      label: 'Interview',
      description: 'Participate in an interview (if required)',
      icon: <Person />,
      details: ['Virtual or in-person interview', 'Technical assessment', 'Portfolio review (for some programs)']
    },
    {
      label: 'Decision',
      description: 'Receive your admission decision',
      icon: <CheckCircle />,
      details: ['Admission offer', 'Scholarship information', 'Enrollment deadline']
    },
    {
      label: 'Enrollment',
      description: 'Complete your enrollment process',
      icon: <Payment />,
      details: ['Tuition payment', 'Course registration', 'Orientation program']
    }
  ]

  const requirements = [
    {
      title: 'Undergraduate Programs',
      items: [
        'High school diploma or equivalent',
        'Minimum GPA of 3.0 (or equivalent)',
        'English proficiency test (for international students)',
        'Personal statement (500-800 words)',
        'Two letters of recommendation'
      ]
    },
    {
      title: 'Graduate Programs',
      items: [
        'Bachelor\'s degree in related field',
        'Minimum GPA of 3.2 (or equivalent)',
        'GRE/GMAT scores (program dependent)',
        'Research proposal (for research-based programs)',
        'Three letters of recommendation',
        'Professional resume/CV'
      ]
    }
  ]

  const deadlines = [
    { term: 'Fall 2024', date: 'August 15, 2024', status: 'Open' },
    { term: 'Spring 2025', date: 'December 10, 2024', status: 'Opening Soon' },
    { term: 'Fall 2025', date: 'August 20, 2025', status: 'Not Open' }
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
            Admissions
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Start your journey to becoming a technology leader at ONNLY-TECH UNIVERSITY
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Application Process */}
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 4 }}>
              Application Process
            </Typography>
            <Stepper orientation={isMobile ? "vertical" : "horizontal"}>
              {steps.map((step, index) => (
                <Step key={step.label} active={true}>
                  <StepLabel StepIconComponent={() => (
                    <Box sx={{ 
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {step.icon}
                    </Box>
                  )}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>{step.description}</Typography>
                    <List>
                      {step.details.map((detail, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={detail} />
                        </ListItem>
                      ))}
                    </List>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>

          {/* Requirements */}
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 4 }}>
              Admission Requirements
            </Typography>
            <Grid container spacing={4}>
              {requirements.map((req, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        {req.title}
                      </Typography>
                      <List>
                        {req.items.map((item, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <School sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Application Deadlines */}
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 4 }}>
              Application Deadlines
            </Typography>
            <Grid container spacing={3}>
              {deadlines.map((deadline, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper 
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                      border: `2px solid ${theme.palette.primary.main}20`
                    }}
                  >
                    <CalendarToday sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {deadline.term}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {deadline.date}
                    </Typography>
                    <Button 
                      variant={deadline.status === 'Open' ? 'contained' : 'outlined'}
                      disabled={deadline.status !== 'Open'}
                      sx={{ mt: 1 }}
                    >
                      {deadline.status}
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Grid item xs={12}>
            <Box sx={{ 
              textAlign: 'center', 
              py: 6,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
              borderRadius: 4,
              px: 4
            }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Ready to Apply?
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                Join Africa's premier technology institution and start your journey to becoming a tech leader
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
                Start Your Application
              </Button>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Need help? Contact our admissions team at admissions@onnlytech.edu
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Admissions
