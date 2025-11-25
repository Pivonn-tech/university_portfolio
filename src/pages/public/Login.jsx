import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Divider,
  Link,
  Grid,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import {
  Login as LoginIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  School as SchoolIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    userType: 'student' // 'student' or 'faculty'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleUserTypeChange = (event, newUserType) => {
    // FIX: Only update if newUserType is not null
    if (newUserType !== null) {
      setFormData(prev => ({
        ...prev,
        userType: newUserType
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login attempt:', { 
        email: formData.email, 
        userType: formData.userType 
      }); // Debug log
      
      // FIX: Add proper validation and ensure userType is correct
      if (formData.userType === 'student') {
        console.log('Navigating to student dashboard');
        navigate('/student/dashboard');
      } else if (formData.userType === 'faculty') {
        console.log('Navigating to faculty dashboard');
        navigate('/faculty/dashboard');
      } else {
        // Fallback to student dashboard if userType is somehow invalid
        console.log('Invalid userType, defaulting to student dashboard');
        navigate('/student/dashboard');
      }
      
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // navigate('/forgot-password');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    navigate('/apply');
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side - Branding */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ textAlign: 'center', color: 'white', px: 4 }}>
            <SchoolIcon sx={{ fontSize: 80, color: '#2563eb', mb: 3 }} />
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              ONNLY-TECH UNIVERSITY
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, mb: 3 }}>
              Welcome Back!
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              Access your portal and university resources.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Login Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper 
              elevation={8} 
              sx={{ 
                width: '100%',
                maxWidth: 450,
                p: 4,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Mobile Logo */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 40, color: '#2563eb', mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ONNLY-TECH
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <LoginIcon sx={{ fontSize: 48, color: '#2563eb', mb: 2 }} />
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Sign In
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Enter your credentials to continue
                </Typography>
              </Box>

              {/* User Type Selection - FIXED */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  I am a:
                </Typography>
                <ToggleButtonGroup
                  value={formData.userType}
                  exclusive
                  onChange={handleUserTypeChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  // FIX: Add this to prevent deselection
                  aria-label="user type"
                >
                  <ToggleButton 
                    value="student" 
                    sx={{ 
                      py: 1.2,
                      '&.Mui-selected': {
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        color: 'white'
                      },
                      '&.Mui-selected:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)'
                      }
                    }}
                  >
                    <PersonIcon sx={{ mr: 1 }} />
                    Student
                  </ToggleButton>
                  <ToggleButton 
                    value="faculty" 
                    sx={{ 
                      py: 1.2,
                      '&.Mui-selected': {
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        color: 'white'
                      },
                      '&.Mui-selected:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)'
                      }
                    }}
                  >
                    <SchoolIcon sx={{ mr: 1 }} />
                    Faculty
                  </ToggleButton>
                </ToggleButtonGroup>
                {/* Debug display - remove in production */}
                <Typography variant="caption" color="text.secondary">
                  Selected: {formData.userType}
                </Typography>
              </Box>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={loading}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={loading}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          edge="end"
                          disabled={loading}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        disabled={loading}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Link 
                    component="button" 
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading}
                    sx={{ textDecoration: 'none' }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    py: 1.5,
                    mb: 3,
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)',
                      transform: 'translateY(-1px)',
                    },
                    '&:disabled': {
                      background: 'grey.300',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {loading ? 'Signing In...' : `Sign In as ${formData.userType === 'student' ? 'Student' : 'Faculty'}`}
                </Button>

                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    OR
                  </Typography>
                </Divider>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Don't have an account?
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleSignUp}
                    disabled={loading}
                    sx={{
                      py: 1.2,
                      borderColor: '#2563eb',
                      color: '#2563eb',
                      '&:hover': {
                        borderColor: '#1d4ed8',
                        background: 'rgba(37, 99, 235, 0.04)',
                      }
                    }}
                  >
                    Create New Account
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;