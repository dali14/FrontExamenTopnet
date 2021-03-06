import "./preExamen.css";
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.espacemanager.com/sites/default/files/field/image/kaptek.png)',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  return fetch('http://localhost:8000/api/stag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(
      
    )
 }
 export default function Signin() {

  const classes = useStyles();
  const [cin, setCin] = useState();
  const [niveau, setNiveau] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      cin: cin,
      niveau: niveau,
    });

    console.log(response)

    localStorage.setItem("cin", response.cin)

    window.location = "/ex"
   
  }


    
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="CIN"
              onChange={e => setCin(e.target.value)}
            />
            <label>Choisir Voter Niveau :</label><br></br>
            <Select  onChange={e => setNiveau(e.target.value)}>
              <MenuItem value="init">init</MenuItem>
              <MenuItem value="Perf">Perf</MenuItem>
              <MenuItem value="PFE">PFE</MenuItem>
              <MenuItem value="Master">Master</MenuItem>
              <MenuItem value="Ingenieur">Ingenieur</MenuItem>
             </Select>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Passer Examen
            </Button>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
    
  
}
