import { React, useState, useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Tab,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Footer from "./Footer";
import wallPaperImg from "./../../assets/images/wallpaper.jpg";
import UseHeader from "./Header";

function Login({ onLogin }) {
  const [value, setValue] = useState("1");
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleLogin = () => {
    // Simulate login
    onLogin({ name: "John Doe", picture: "path/to/profile.jpg" });
  };

  const handleSignUp = () => {
    // Simulate sign-up
    onLogin({ name: "Jane Doe", picture: "path/to/profile.jpg" });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleAcceptPolicyChange = (event) => {
    setAcceptPolicy(event.target.checked);
  };

  useEffect(() => {
    if (value === "1") {
      setContainerHeight("420px"); // Adjust height for Sign In tab
    } else if (value === "2") {
      setContainerHeight("700px"); // Adjust height for Sign Up tab
    }
  }, [value]);

  return (
    <div className="bg-black min-h-screen w-full h-full flex flex-col justify-center relative">
      <img
        className="absolute w-full h-[820px] top-[60px] z-0 opacity-20"
        // style={{ height: `calc(${containerHeight} + 120px)` }}
        src={wallPaperImg}
      />
      <UseHeader isLoggedIn={false} userProfile={null} />
      <Box
        sx={{
          width: "36%",
          marginLeft: "14%",
          minWidth: "200px",
          typography: "body1",
          backgroundColor: "white",
          marginTop: "120px",
          marginBottom: "60px",
          flexDirection: "column",
          alignItems: "center",
          paddingInline: "14px",
          height: containerHeight,
          overflow: "auto",
          zIndex: 10
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 1 }}>
            <TabList
              onChange={handleChange}
              centered
              variant="fullWidth"
              sx={{ minHeight: "36px" }}
            >
              <Tab label="Sign In" value="1" />
              <Tab label="Sign Up" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                minHeight: "200px",
              }}
            >
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Email, Username or Phone Number
              </Typography>
              <TextField
                placeholder="Email, Username or Phone Number"
                name="email"
                size="small"
                value={signInData.email}
                onChange={handleSignInChange}
                fullWidth
              />
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Password
              </Typography>
              <TextField
                placeholder="password"
                name="password"
                type={showPassword ? "text" : "password"}
                size="small"
                value={signInData.password}
                onChange={handleSignInChange}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      name="rememberMe"
                      color="secondary"
                    />
                  }
                  label="Remember Me"
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontSize: "14px",
                      color: "gray",
                    },
                  }}
                />
                <Button variant="text" color="secondary" size="small">
                  Forgot Password?
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{ marginTop: "40px" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Name
              </Typography>
              <TextField
                placeholder="Name"
                name="name"
                size="small"
                value={signUpData.name}
                onChange={handleSignUpChange}
                fullWidth
              />
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Email
              </Typography>
              <TextField
                placeholder="Email"
                name="email"
                size="small"
                value={signUpData.email}
                onChange={handleSignUpChange}
                fullWidth
              />
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Phone Number
              </Typography>
              <TextField
                placeholder="Phone Number"
                name="phone"
                size="small"
                value={signUpData.phone}
                onChange={handleSignUpChange}
                fullWidth
              />
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Date of Birth
              </Typography>
              <TextField
                placeholder="Date of Birth"
                name="dob"
                type="date"
                size="small"
                value={signUpData.dob}
                onChange={handleSignUpChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Enter Password
              </Typography>
              <TextField
                placeholder="Enter Password"
                name="password1"
                type="password"
                size="small"
                value={signUpData.password}
                onChange={handleSignUpChange}
                fullWidth
              />
              <Typography
                variant="body1"
                marginTop="4px"
                fontSize="14px"
                fontWeight="bold"
              >
                Confirm Password
              </Typography>
              <TextField
                placeholder="Confirm Password"
                name="password2"
                type="password"
                size="small"
                value={signUpData.password}
                // onChange={handleSignUpChange}
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptPolicy}
                    onChange={handleAcceptPolicyChange}
                    name="acceptPolicy"
                    color="primary"
                  />
                }
                label="I accept the policy"
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontSize: "14px",
                    color: "gray",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{ marginTop: "20px" }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
      <Footer className="z-10 bg-black" />
    </div>
  );
}
export default Login;
