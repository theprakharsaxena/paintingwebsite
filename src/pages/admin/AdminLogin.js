import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import loginapi from "../../services/authentication/loginapi";
import CircularProgressIndicator from "../../common/Loadable/CircularProgressIndicator";
import { addAdmin } from "../../redux/slice/adminSlice";
import { addUser } from "../../redux/slice/userSlice";

export default function AdminLogin() {
  const admin = useSelector((state) => state.admin.value);
  const uid = admin?._id;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginapi({
        email: inputs.email,
        password: inputs.password,
      });
      if (data?.success && data?.user?.role === 1) {
        setLoading(false);
        toast.success("Admin Login Successfully");
        dispatch(addAdmin(data?.user));
        navigate("/dashboard");
      } else if (data?.success && data?.user?.role === 0) {
        dispatch(addUser(data?.user));
        setLoading(false);
        toast.success("You are a user not a Admin");
        toast.success("User Login Successfully");
        navigate("/");
      } else if (!data?.success) {
        toast.error(data?.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <CircularProgressIndicator loading={loading} />
      {!uid ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Link to="/admin">ADMIN</Link>
            <Box
              component="form"
              onSubmit={(e) => {
                setLoading(true);
                handleSubmit(e);
              }}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                value={inputs.email}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={inputs.password}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link to="/admin-register" variant="body2">
                    Register?
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Container>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Link to="/">BACK TO HOME PAGE</Link>
          <Link style={{ marginTop: "20px" }} to="/admin/dashboard">
            GO TO DASHBOARD PAGE
          </Link>
        </Box>
      )}
    </>
  );
}
