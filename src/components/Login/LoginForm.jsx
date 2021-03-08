import React from 'react';
import { useHistory } from 'react-router-dom'
import { Grid, TextField, Button, Avatar, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import LockoutOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import './scss/LoginForm.scss'

//Styles
const avatarStyle = { backgroundColor: "#0C70D4" }

//Methods
/* const history = useHistory();

const login = () => {
    history.push('/prueba')
} */

const LoginForm = () => {
    return (
        <Grid container justify="center" alignItems="center" className="contenedor-flex">
            <Grid align="center">
                {/* <img src={userImage} /> */}
                <Avatar style={avatarStyle}><LockoutOutlinedIcon /></Avatar>
                <h2>Bienvenido</h2>
            </Grid>
            <form>
                <TextField variant="outlined" size="small" label="Usuario" />
                <TextField variant="outlined" size="small" label="Contraseña" />
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                        />
                    }
                    variant="primary"
                    label="¿Recordar?"
                >
                </FormControlLabel>
                <Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                    /* onClick={() => login()} */
                    >
                        Ingresar
                    </Button>
                </Grid>
                <Link href="#"> ¿Problemas para iniciar? </Link>
            </form>
        </Grid>
    )
}

export default LoginForm
