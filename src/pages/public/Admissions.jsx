import React, { useState } from 'react'
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
  useMediaQuery,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tab,
  Tabs,
  AppBar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack
} from '@mui/material'
import {
  CheckCircle,
  Schedule,
  School,
  Payment,
  Assignment,
  Person,
  CalendarToday,
  Description,
  Close,
  PersonAdd,
  Email,
  Phone,
  ExpandMore,
  Download,
  Info,
  Timeline,
  Money,
  Groups,
  QuestionAnswer
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Admissions = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [tabValue, setTabValue] = useState(0)
  const [faqOpen, setFaqOpen] = useState(null)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleFaqToggle = (panel) => (event, isExpanded) => {
    setFaqOpen(isExpanded ? panel : null)
  }

  const steps = [
    {
      label: 'Explore Programs',
      description: 'Research and choose your desired program',
      icon: <School />,
      details: ['Browse program offerings', 'Check admission requirements', 'Review curriculum details', 'Contact academic advisors'],
      timeline: '1-2 weeks',
      action: () => navigate('/programs')
    },
    {
      label: 'Prepare Documents',
      description: 'Gather all required application materials',
      icon: <Description />,
      details: ['Academic transcripts', 'Personal statement', 'Letters of recommendation', 'Test scores (if required)', 'Portfolio (for some programs)'],
      timeline: '2-4 weeks',
      action: () => setTabValue(1)
    },
    {
      label: 'Submit Application',
      description: 'Complete and submit your online application',
      icon: <Assignment />,
      details: ['Online application form', 'Upload required documents', 'Pay application fee', 'Submit before deadline'],
      timeline: '30-60 minutes',
      action: () => navigate('/apply')
    },
    {
      label: 'Interview & Assessment',
      description: 'Participate in evaluation process',
      icon: <Person />,
      details: ['Virtual or in-person interview', 'Technical assessment', 'Portfolio review', 'Additional testing if required'],
      timeline: '1-2 weeks',
      action: null
    },
    {
      label: 'Admission Decision',
      description: 'Receive and review your admission offer',
      icon: <CheckCircle />,
      details: ['Admission decision notification', 'Scholarship information', 'Financial aid package', 'Enrollment instructions'],
      timeline: '2-4 weeks',
      action: null
    },
    {
      label: 'Enrollment',
      description: 'Complete your enrollment process',
      icon: <Payment />,
      details: ['Accept admission offer', 'Submit enrollment deposit', 'Register for courses', 'Attend orientation'],
      timeline: '2-3 weeks',
      action: null
    }
  ]

  const requirements = {
    undergraduate: [
      {
        title: 'Academic Requirements',
        items: [
          'High school diploma or equivalent with minimum 3.0 GPA',
          'Official high school transcripts',
          'English proficiency (TOEFL 80+ or IELTS 6.5+ for international students)',
          'Mathematics background (Algebra, Calculus preferred)'
        ]
      },
      {
        title: 'Application Materials',
        items: [
          'Completed online application form',
          'Personal statement (500-800 words)',
          'Two letters of recommendation',
          'Resume or CV (optional but recommended)',
          'Portfolio (for design/development programs)'
        ]
      },
      {
        title: 'Additional Requirements',
        items: [
          '$75 non-refundable application fee',
          'Interview (for competitive programs)',
          'Standardized test scores (optional)',
          'Proof of financial support (international students)'
        ]
      }
    ],
    graduate: [
      {
        title: 'Academic Requirements',
        items: [
          'Bachelor\'s degree in related field with minimum 3.2 GPA',
          'Official undergraduate transcripts',
          'English proficiency (TOEFL 90+ or IELTS 7.0+ for international students)',
          'Prerequisite coursework in relevant field'
        ]
      },
      {
        title: 'Application Materials',
        items: [
          'Completed graduate application form',
          'Statement of purpose (1000-1500 words)',
          'Three letters of recommendation',
          'Professional resume/CV',
          'Writing samples or portfolio'
        ]
      },
      {
        title: 'Additional Requirements',
        items: [
          '$100 non-refundable application fee',
          'GRE/GMAT scores (program dependent)',
          'Research proposal (for research-based programs)',
          'Interview with faculty committee'
        ]
      }
    ]
  }

  const deadlines = [
    { 
      term: 'Fall 2024', 
      date: 'August 15, 2024', 
      status: 'Open', 
      priority: 'March 1, 2024',
      international: 'June 1, 2024'
    },
    { 
      term: 'Spring 2025', 
      date: 'December 10, 2024', 
      status: 'Opening Soon', 
      priority: 'September 1, 2024',
      international: 'October 1, 2024'
    },
    { 
      term: 'Fall 2025', 
      date: 'August 20, 2025', 
      status: 'Not Open', 
      priority: 'March 1, 2025',
      international: 'June 1, 2025'
    }
  ]

  const financialAid = [
    {
      type: 'Merit Scholarships',
      amount: 'Up to $15,000/year',
      deadline: 'Rolling',
      eligibility: 'Based on academic achievement and test scores',
      apply: 'Automatic consideration with application'
    },
    {
      type: 'Need-Based Grants',
      amount: 'Up to $10,000/year',
      deadline: 'March 1',
      eligibility: 'Based on financial need and academic performance',
      apply: 'Submit FAFSA and financial documents'
    },
    {
      type: 'Tech Talent Scholarships',
      amount: 'Up to $20,000/year',
      deadline: 'February 15',
      eligibility: 'For students in STEM fields with demonstrated talent',
      apply: 'Separate application and portfolio required'
    },
    {
      type: 'Diversity Scholarships',
      amount: 'Up to $12,000/year',
      deadline: 'January 31',
      eligibility: 'Supporting underrepresented groups in technology',
      apply: 'Essay and application required'
    }
  ]

  const faqs = [
    {
      question: 'What is the application fee and can it be waived?',
      answer: 'The application fee is $75 for undergraduate programs and $100 for graduate programs. Fee waivers are available for students with demonstrated financial need, veterans, and participants in certain programs like Upward Bound or TRIO.'
    },
    {
      question: 'How long does the admission decision take?',
      answer: 'Most decisions are made within 4-6 weeks after completing your application. During peak periods, it may take up to 8 weeks. You can check your application status through your student portal.'
    },
    {
      question: 'Can I apply to multiple programs?',
      answer: 'Yes, you can apply to up to three programs with one application fee. However, you will need to submit separate personal statements tailored to each program.'
    },
    {
      question: 'What if I miss the application deadline?',
      answer: 'We accept late applications on a space-available basis. Contact our admissions office to discuss your situation. Some programs may have stricter deadlines than others.'
    },
    {
      question: 'Do you offer conditional admission?',
      answer: 'Yes, conditional admission may be offered to international students who meet academic requirements but need to improve English proficiency. You would need to complete our English language program before starting degree courses.'
    }
  ]

  const handleStartApplication = () => {
    navigate('/apply')
  }

  const handleContactAdmissions = () => {
    // In a real app, this would open a contact form or email client
    window.location.href = 'mailto:admissions@onnlytech.edu?subject=Admissions Inquiry'
  }

  const handleDownloadChecklist = () => {
    // In a real app, this would download a PDF checklist
    console.log('Downloading application checklist...')
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
            Admissions
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', opacity: 0.9, maxWidth: 600, mx: 'auto', mb: 4 }}>
            Start your journey to becoming a technology leader at ONNLY-TECH UNIVERSITY
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large"
              startIcon={<PersonAdd />}
              onClick={handleStartApplication}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'grey.100',
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
              startIcon={<Download />}
              onClick={handleDownloadChecklist}
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'white',
                  color: 'primary.main'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Download Checklist
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Quick Navigation Tabs */}
        <Box sx={{ mb: 6 }}>
          <AppBar position="static" sx={{ bgcolor: 'white', color: 'primary.main', borderRadius: 2 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Application Process" icon={<Timeline />} iconPosition="start" />
              <Tab label="Requirements" icon={<School />} iconPosition="start" />
              <Tab label="Deadlines" icon={<CalendarToday />} iconPosition="start" />
              <Tab label="Financial Aid" icon={<Money />} iconPosition="start" />
              <Tab label="FAQ" icon={<QuestionAnswer />} iconPosition="start" />
            </Tabs>
          </AppBar>
        </Box>

        {/* Application Process */}
        {tabValue === 0 && (
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
                Application Process
              </Typography>
              <Stepper orientation={isMobile ? "vertical" : "horizontal"} activeStep={activeStep}>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel 
                      optional={<Typography variant="caption">{step.timeline}</Typography>}
                      StepIconComponent={() => (
                        <Box sx={{ 
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {step.icon}
                        </Box>
                      )}
                    >
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
                      {step.action && (
                        <Button 
                          variant="contained" 
                          onClick={step.action}
                          sx={{ mt: 2 }}
                        >
                          {step.label === 'Explore Programs' ? 'Browse Programs' : 'Start Application'}
                        </Button>
                      )}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
        )}

        {/* Requirements */}
        {tabValue === 1 && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
                Admission Requirements
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <School sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
                    <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      Undergraduate
                    </Typography>
                  </Box>
                  {requirements.undergraduate.map((req, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {req.title}
                      </Typography>
                      <List dense>
                        {req.items.map((item, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: 'primary.main', fontSize: 16 }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <School sx={{ color: 'secondary.main', mr: 2, fontSize: 32 }} />
                    <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                      Graduate
                    </Typography>
                  </Box>
                  {requirements.graduate.map((req, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {req.title}
                      </Typography>
                      <List dense>
                        {req.items.map((item, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: 'secondary.main', fontSize: 16 }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Deadlines */}
        {tabValue === 2 && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
                Application Deadlines
              </Typography>
            </Grid>
            
            {deadlines.map((deadline, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <CalendarToday sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {deadline.term}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Chip 
                        label={deadline.status} 
                        color={deadline.status === 'Open' ? 'success' : deadline.status === 'Opening Soon' ? 'warning' : 'default'}
                        sx={{ mb: 2 }}
                      />
                      
                      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Final Deadline: {deadline.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Priority: {deadline.priority}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        International: {deadline.international}
                      </Typography>
                    </Box>

                    <Button 
                      variant={deadline.status === 'Open' ? 'contained' : 'outlined'}
                      disabled={deadline.status !== 'Open'}
                      fullWidth
                      onClick={deadline.status === 'Open' ? handleStartApplication : null}
                    >
                      {deadline.status === 'Open' ? 'Apply Now' : deadline.status}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Financial Aid */}
        {tabValue === 3 && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
                Financial Aid & Scholarships
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                85% of our students receive some form of financial assistance
              </Typography>
            </Grid>
            
            {financialAid.map((aid, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                        {aid.type}
                      </Typography>
                      <Chip label={aid.amount} color="primary" variant="outlined" />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Deadline:</strong> {aid.deadline}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {aid.eligibility}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontStyle: 'italic' }}>
                      {aid.apply}
                    </Typography>
                    
                    <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ mt: 2 }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* FAQ */}
        {tabValue === 4 && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
                Frequently Asked Questions
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        )}

        {/* Contact CTA */}
        <Box sx={{ 
          textAlign: 'center', 
          py: 8,
          mt: 6,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
          borderRadius: 4,
          px: 4
        }}>
          <Groups sx={{ fontSize: 64, color: 'primary.main', mb: 3 }} />
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Need Help With Your Application?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Our admissions team is here to help you through every step of the process
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Button 
              variant="contained" 
              size="large"
              startIcon={<Email />}
              onClick={handleContactAdmissions}
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
              Email Admissions
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<PersonAdd />}
              onClick={handleStartApplication}
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
              Start Application
            </Button>
          </Stack>
          
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Email sx={{ color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              admissions@onnlytech.edu
            </Typography>
            <Phone sx={{ color: 'text.secondary', ml: 2 }} />
            <Typography variant="body2" color="text.secondary">
              +1 (555) 123-TECH
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Admissions