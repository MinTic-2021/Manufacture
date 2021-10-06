import React from 'react'
import google from 'media/google.png'
import devfull from 'media/Devfull.png'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="cointainer-sm" style={{width: '61vh'}}>
                <img src={devfull} alt="DevFull" style={{height: '25vh', padding: '0vh 2vh 3vh 7vh'}}/>
                <h4 style={{display: 'flex', justifyContent: 'center', paddingBottom: '3vh'}}>
                    Iniciar sesión
                </h4>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Correo electrónico:</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3" style={{paddingTop: '1vh'}}>
                        <label for="exampleInputPassword1" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Recuérdame</label>
                        </div>
                        <label style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}>
                            Olvidé la contraseña
                        </label>
                    </div>
                    <Link to="/bienvenida">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button type="submit" className="btn btn-primary" style={{marginBottom: '1vh', width: '40%', backgroundColor:  '#426E86'}}>
                                Ingresar
                            </button>
                        </div>
                    </Link>
                </form>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2vh'}}>
                    <label>¿No tienes cuenta?</label>
                    <Link to="/registro">
                        <label style={{color: 'blue', textDecoration: 'underline', cursor:'pointer'}}>
                            Registrarse
                        </label>
                    </Link>
                </div>
                <span>
                    -----------------------------<b> o </b>------------------------------
                </span>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '5vh', marginTop: '2vh'}}>
                    <button type="button" className="btn btn-light">
                        <img src={google} alt="Google" style={{height: '4vh', marginRight: '2vh'}}/>
                        Ingresar con Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
