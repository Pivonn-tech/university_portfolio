import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  MenuItem,
  Alert,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  InputAdornment,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  PersonAdd as PersonAddIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  Download as DownloadIcon,
  Print as PrintIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const steps = ['Personal Information', 'Academic Background', 'Program Selection', 'Supporting Documents', 'Review & Submit'];

const Application = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [admissionLetterOpen, setAdmissionLetterOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    personalInfo: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      nationality: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      },
      emergencyContact: {
        name: '',
        relationship: '',
        phone: '',
        email: ''
      }
    },
    
    // Step 2: Academic Background
    academicBackground: {
      highSchool: {
        name: '',
        location: '',
        graduationYear: '',
        gpa: '',
        diplomaType: ''
      },
      previousCollege: {
        attended: 'no',
        name: '',
        location: '',
        yearsAttended: '',
        degree: '',
        gpa: ''
      },
      standardizedTests: {
        satScore: '',
        actScore: '',
        toeflScore: '',
        ieltsScore: ''
      },
      honors: []
    },
    
    // Step 3: Program Selection
    programSelection: {
      program: '',
      concentration: '',
      semester: '',
      startYear: '',
      degreeType: 'undergraduate',
      campus: 'main',
      housing: 'no'
    },
    
    // Step 4: Supporting Documents
    supportingDocuments: {
      essay: '',
      extracurriculars: '',
      workExperience: '',
      references: [
        { name: '', relationship: '', email: '', phone: '' },
        { name: '', relationship: '', email: '', phone: '' }
      ],
      documentsSubmitted: {
        transcript: false,
        testScores: false,
        recommendation1: false,
        recommendation2: false,
        essaySubmitted: false
      }
    }
  });

  const programs = {
    undergraduate: [
      'Computer Science',
      'Software Engineering',
      'Data Science',
      'Computer Engineering',
      'Information Technology',
      'Cybersecurity',
      'Business Administration',
      'Electrical Engineering'
    ],
    graduate: [
      'Master of Computer Science',
      'Master of Data Science',
      'MBA in Technology Management',
      'PhD in Computer Science'
    ]
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (path, value) => {
    const keys = path.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayChange = (path, index, value) => {
    const keys = path.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]][index] = value;
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setApplicationSubmitted(true);
    setAdmissionLetterOpen(true);
  };

  const generateAdmissionLetter = () => {
    const { personalInfo, programSelection } = formData;
    const today = new Date().toLocaleDateString();
    
    return `
      ONNLY-TECH UNIVERSITY
      Office of Admissions
      123 University Avenue
      Tech City, TC 12345
      
      ${today}
      
      Dear ${personalInfo.firstName} ${personalInfo.lastName},
      
      We are pleased to inform you that you have been accepted into the ${programSelection.program} program 
      at ONNLY-TECH UNIVERSITY for the ${programSelection.semester} ${programSelection.startYear} semester.
      
      Your application demonstrated exceptional qualifications and we believe you will be a valuable 
      addition to our academic community. Our faculty reviewed your credentials with great interest 
      and we are confident that you have the potential to excel in your chosen field of study.
      
      PROGRAM DETAILS:
      - Program: ${programSelection.program}
      - Degree: ${programSelection.degreeType}
      - Campus: ${programSelection.campus}
      - Start Date: ${programSelection.semester} ${programSelection.startYear}
      
      NEXT STEPS:
      1. Confirm your acceptance within 30 days
      2. Submit final transcripts
      3. Complete housing application (if applicable)
      4. Attend orientation session
      
      We look forward to welcoming you to the ONNLY-TECH UNIVERSITY community. Should you have any 
      questions, please contact the Office of Admissions at admissions@onnlytech.edu or (555) 123-4567.
      
      Sincerely,
      
      Dr. Sarah Johnson
      Director of Admissions
      ONNLY-TECH UNIVERSITY
    `;
  };

  const downloadAdmissionLetter = () => {
    const letter = generateAdmissionLetter();
    const blob = new Blob([letter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `admission_letter_${formData.personalInfo.lastName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printAdmissionLetter = () => {
    const letter = generateAdmissionLetter();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Admission Letter - ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
            .header { text-align: center; margin-bottom: 30px; }
            .content { white-space: pre-line; }
          </style>
        </head>
        <body>
          <div class="content">${letter}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Personal Details</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField required fullWidth label="First Name" value={formData.personalInfo.firstName} 
                onChange={(e) => handleChange('personalInfo.firstName', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Middle Name" value={formData.personalInfo.middleName} 
                onChange={(e) => handleChange('personalInfo.middleName', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField required fullWidth label="Last Name" value={formData.personalInfo.lastName} 
                onChange={(e) => handleChange('personalInfo.lastName', e.target.value)} />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Email" type="email" value={formData.personalInfo.email} 
                onChange={(e) => handleChange('personalInfo.email', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Phone" value={formData.personalInfo.phone} 
                onChange={(e) => handleChange('personalInfo.phone', e.target.value)} />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} 
                value={formData.personalInfo.dateOfBirth} onChange={(e) => handleChange('personalInfo.dateOfBirth', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth select label="Gender" value={formData.personalInfo.gender} 
                onChange={(e) => handleChange('personalInfo.gender', e.target.value)}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
                <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
              </TextField>
            </Grid>
            
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>Address Information</Typography>
            </Grid>
            
            <Grid item xs={12}>
              <TextField required fullWidth label="Street Address" value={formData.personalInfo.address.street} 
                onChange={(e) => handleChange('personalInfo.address.street', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="City" value={formData.personalInfo.address.city} 
                onChange={(e) => handleChange('personalInfo.address.city', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="State/Province" value={formData.personalInfo.address.state} 
                onChange={(e) => handleChange('personalInfo.address.state', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="ZIP/Postal Code" value={formData.personalInfo.address.zipCode} 
                onChange={(e) => handleChange('personalInfo.address.zipCode', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Country" value={formData.personalInfo.address.country} 
                onChange={(e) => handleChange('personalInfo.address.country', e.target.value)} />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>High School Information</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth label="High School Name" value={formData.academicBackground.highSchool.name} 
                onChange={(e) => handleChange('academicBackground.highSchool.name', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Graduation Year" type="number" 
                value={formData.academicBackground.highSchool.graduationYear} 
                onChange={(e) => handleChange('academicBackground.highSchool.graduationYear', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="GPA" type="number" step="0.1" 
                InputProps={{ endAdornment: <InputAdornment position="end">/4.0</InputAdornment> }}
                value={formData.academicBackground.highSchool.gpa} 
                onChange={(e) => handleChange('academicBackground.highSchool.gpa', e.target.value)} />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>Standardized Test Scores</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="SAT Score" type="number" 
                value={formData.academicBackground.standardizedTests.satScore} 
                onChange={(e) => handleChange('academicBackground.standardizedTests.satScore', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="ACT Score" type="number" 
                value={formData.academicBackground.standardizedTests.actScore} 
                onChange={(e) => handleChange('academicBackground.standardizedTests.actScore', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="TOEFL Score" type="number" 
                value={formData.academicBackground.standardizedTests.toeflScore} 
                onChange={(e) => handleChange('academicBackground.standardizedTests.toeflScore', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="IELTS Score" type="number" step="0.5" 
                value={formData.academicBackground.standardizedTests.ieltsScore} 
                onChange={(e) => handleChange('academicBackground.standardizedTests.ieltsScore', e.target.value)} />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Degree Type</FormLabel>
                <RadioGroup row value={formData.programSelection.degreeType} 
                  onChange={(e) => handleChange('programSelection.degreeType', e.target.value)}>
                  <FormControlLabel value="undergraduate" control={<Radio />} label="Undergraduate" />
                  <FormControlLabel value="graduate" control={<Radio />} label="Graduate" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField required fullWidth select label="Program of Interest" 
                value={formData.programSelection.program} 
                onChange={(e) => handleChange('programSelection.program', e.target.value)}>
                {programs[formData.programSelection.degreeType].map(program => (
                  <MenuItem key={program} value={program}>{program}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField required fullWidth select label="Intended Semester" 
                value={formData.programSelection.semester} 
                onChange={(e) => handleChange('programSelection.semester', e.target.value)}>
                <MenuItem value="fall">Fall</MenuItem>
                <MenuItem value="spring">Spring</MenuItem>
                <MenuItem value="summer">Summer</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Start Year" type="number" 
                value={formData.programSelection.startYear} 
                onChange={(e) => handleChange('programSelection.startYear', e.target.value)} />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Campus Preference</FormLabel>
                <RadioGroup row value={formData.programSelection.campus} 
                  onChange={(e) => handleChange('programSelection.campus', e.target.value)}>
                  <FormControlLabel value="main" control={<Radio />} label="Main Campus" />
                  <FormControlLabel value="downtown" control={<Radio />} label="Downtown Campus" />
                  <FormControlLabel value="online" control={<Radio />} label="Online" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">University Housing</FormLabel>
                <RadioGroup row value={formData.programSelection.housing} 
                  onChange={(e) => handleChange('programSelection.housing', e.target.value)}>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes, I plan to live on campus" />
                  <FormControlLabel value="no" control={<Radio />} label="No, I will commute" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Personal Essay</Typography>
              <TextField fullWidth multiline rows={6} placeholder="Tell us about your academic interests, career goals, and why you want to study at ONNLY-TECH UNIVERSITY..." 
                value={formData.supportingDocuments.essay} 
                onChange={(e) => handleChange('supportingDocuments.essay', e.target.value)} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Extracurricular Activities</Typography>
              <TextField fullWidth multiline rows={3} placeholder="List your extracurricular activities, volunteer work, leadership roles, etc." 
                value={formData.supportingDocuments.extracurriculars} 
                onChange={(e) => handleChange('supportingDocuments.extracurriculars', e.target.value)} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Required Documents Checklist</Typography>
              <FormControlLabel control={<Checkbox checked={formData.supportingDocuments.documentsSubmitted.transcript} 
                onChange={(e) => handleChange('supportingDocuments.documentsSubmitted.transcript', e.target.checked)} />} 
                label="Official High School Transcript" />
              <br />
              <FormControlLabel control={<Checkbox checked={formData.supportingDocuments.documentsSubmitted.testScores} 
                onChange={(e) => handleChange('supportingDocuments.documentsSubmitted.testScores', e.target.checked)} />} 
                label="Standardized Test Scores" />
              <br />
              <FormControlLabel control={<Checkbox checked={formData.supportingDocuments.documentsSubmitted.essaySubmitted} 
                onChange={(e) => handleChange('supportingDocuments.documentsSubmitted.essaySubmitted', e.target.checked)} />} 
                label="Personal Essay" />
            </Grid>
          </Grid>
        );

      case 4:
        return (
          <Box>
            <Alert severity="info" sx={{ mb: 3 }}>
              Please review your application carefully before submitting. You cannot make changes after submission.
            </Alert>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Personal Information</Typography>
                    <Typography><strong>Name:</strong> {formData.personalInfo.firstName} {formData.personalInfo.lastName}</Typography>
                    <Typography><strong>Email:</strong> {formData.personalInfo.email}</Typography>
                    <Typography><strong>Phone:</strong> {formData.personalInfo.phone}</Typography>
                    <Typography><strong>Date of Birth:</strong> {formData.personalInfo.dateOfBirth}</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Academic Information</Typography>
                    <Typography><strong>High School:</strong> {formData.academicBackground.highSchool.name}</Typography>
                    <Typography><strong>Graduation Year:</strong> {formData.academicBackground.highSchool.graduationYear}</Typography>
                    <Typography><strong>GPA:</strong> {formData.academicBackground.highSchool.gpa}</Typography>
                    {formData.academicBackground.standardizedTests.satScore && (
                      <Typography><strong>SAT:</strong> {formData.academicBackground.standardizedTests.satScore}</Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Program Selection</Typography>
                    <Typography><strong>Program:</strong> {formData.programSelection.program}</Typography>
                    <Typography><strong>Degree Type:</strong> {formData.programSelection.degreeType}</Typography>
                    <Typography><strong>Semester:</strong> {formData.programSelection.semester} {formData.programSelection.startYear}</Typography>
                    <Typography><strong>Campus:</strong> {formData.programSelection.campus}</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox required />}
                  label="I certify that the information provided is true and complete to the best of my knowledge."
                />
              </Grid>
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8, mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <PersonAddIcon sx={{ fontSize: 48, color: '#2563eb', mb: 2 }} />
            <Typography variant="h4" component="h1" gutterBottom>
              Application to ONNLY-TECH UNIVERSITY
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Complete your application in 5 simple steps
            </Typography>
          </Box>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 4 }}>
              {renderStepContent(activeStep)}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box>
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)',
                      }
                    }}
                  >
                    Submit Application
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)',
                      }
                    }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>

      {/* Admission Letter Dialog */}
      <Dialog open={admissionLetterOpen} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">Admission Letter</Typography>
            <IconButton onClick={() => setAdmissionLetterOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Paper variant="outlined" sx={{ p: 3, whiteSpace: 'pre-line', fontFamily: 'monospace' }}>
            {generateAdmissionLetter()}
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<DownloadIcon />} onClick={downloadAdmissionLetter}>
            Download
          </Button>
          <Button startIcon={<PrintIcon />} onClick={printAdmissionLetter} variant="contained">
            Print
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Application;