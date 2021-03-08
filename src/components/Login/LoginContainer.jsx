import React from 'react'
import { Grid } from '@material-ui/core'
import LoginForm from './LoginForm'
import clinicaImage from '../../assets/clinica.jpg'
import './scss/LoginContainer.scss'

const LoginContainer = () => {
    return (
        <div className="contenedor">
            <Grid className="elemento-flex">
                <img src={clinicaImage} alt=""></img>
            </Grid>
            <Grid className="elemento-flex">
                <LoginForm />
            </Grid>
        </div>
    )
}

export default LoginContainer
