import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useScrollTrigger,
  Slide,
  alpha,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'

// Hide AppBar on scroll
function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLogin = () => {
    navigate('/login') // Updated to /login
    setMobileOpen(false)
  }

  const handleApplyNow = () => {
    navigate('/apply') // Navigates to application page
    setMobileOpen(false)
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ]

  const isActivePath = (path) => {
    return location.pathname === path
  }

  const drawer = (
    <Box sx={{ 
      width: 280, 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      height: '100%',
      color: 'white'
    }}>
      {/* Drawer Header */}
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SchoolIcon sx={{ fontSize: 32, color: '#2563eb', mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #2563eb, #7c3aed)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ONNLY-TECH
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer Menu Items */}
      <List sx={{ p: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label}
            onClick={() => {
              navigate(item.path)
              setMobileOpen(false)
            }}
            sx={{
              borderRadius: 2,
              mb: 1,
              background: isActivePath(item.path) ? 'rgba(37, 99, 235, 0.2)' : 'transparent',
              border: isActivePath(item.path) ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid transparent',
              '&:hover': {
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)'
              },
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: isActivePath(item.path) ? 'bold' : 'normal',
                  color: isActivePath(item.path) ? '#2563eb' : 'white'
                }
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Drawer Auth Buttons */}
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LoginIcon />}
          onClick={handleLogin} // This now uses handleLogin which navigates to /login
          sx={{
            borderColor: 'rgba(255,255,255,0.3)',
            color: 'white',
            mb: 2,
            py: 1.2,
            '&:hover': {
              borderColor: '#2563eb',
              background: 'rgba(37, 99, 235, 0.1)'
            }
          }}
        >
          Login
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<PersonAddIcon />}
          onClick={handleApplyNow}
          sx={{
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            py: 1.2,
            '&:hover': {
              background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)',
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar 
          sx={{ 
            background: mobileOpen ? 'transparent' : 'rgba(15, 23, 42, 0.95)',
            backdropFilter: mobileOpen ? 'none' : 'blur(20px)',
            borderBottom: mobileOpen ? 'none' : '1px solid rgba(255,255,255,0.1)',
            boxShadow: mobileOpen ? 'none' : '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, md: 2 } }}>
              {/* Logo Section */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
              >
                <SchoolIcon sx={{ 
                  fontSize: { xs: 28, md: 32 }, 
                  color: '#2563eb', 
                  mr: 2 
                }} />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  ONNLY-TECH UNIVERSITY
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'block', sm: 'none' }
                  }}
                >
                  ONNLY-TECH
                </Typography>
              </Box>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: isActivePath(item.path) ? '#2563eb' : 'white',
                      fontWeight: isActivePath(item.path) ? 'bold' : 'normal',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: isActivePath(item.path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        width: '80%',
                        height: '2px',
                        background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                        transition: 'transform 0.3s ease'
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)'
                      },
                      '&:hover': {
                        color: '#2563eb',
                        background: 'rgba(37, 99, 235, 0.1)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Desktop Auth Buttons */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <Button
                  variant="text"
                  startIcon={<LoginIcon />}
                  onClick={handleLogin} // This now uses handleLogin which navigates to /login
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: '#2563eb',
                      background: 'rgba(37, 99, 235, 0.1)'
                    }
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PersonAddIcon />}
                  onClick={handleApplyNow}
                  sx={{
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    px: 3,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1d4ed8, #5b21b6)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Apply Now
                </Button>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'transparent',
            border: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header