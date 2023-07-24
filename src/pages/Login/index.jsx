import React from "react";
import { Link, Router, NavLink } from "react-router-dom";
import './styles.css';



export default () => {
    return (
        <>
            <div className="page--login">
                <div className="black-filter" />

                <div className="header-logo">
                    <a>
                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo" />
                    </a>
                </div>

            </div>
            <div className="login-box">
                <div className="enter-label">
                    <h1>Entrar</h1>

                </div>
                <input className="input-email" type="text" placeholder="Email ou numero de telefone" />
                <input className="input-pass" type="password" placeholder="Senha" />


                <Link className="link-login" to="/">
                    <button className="btn-login" >Entrar</button>
                </Link>



                <div className="remember">
                    <div>
                        <input type="checkbox" />Lembre-se de mim

                    </div>
                    <div>
                        <a href="">Precisa de ajuda?</a>

                    </div>

                </div>
                <div className="register-area">
                    <h4>Novo por aqui? <a href="">Assine agora.</a></h4>
                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="">Saiba Mais</a></p>
                </div>
                <div className="footer-login">
                    <h4>Duvidas? Ligue 0800 591 2876</h4>
                    <div className="footer-links">
                        <div>
                            <a href="">Perguntas frequentes</a>
                            <a href="">Preferências de Cookies</a>
                        </div>
                        <div>
                            <a href="">Central de Ajuda</a>
                            <a href="">Informações coorporativas</a>
                        </div>
                        <div>
                            <a href="">Termos de uso</a>

                        </div>
                        <div>
                            <a href="">Privacidade</a>
                        </div>
                    </div>
                    {/* <input type="select" placeholder="Selecione" /> */}
                </div>
            </div>

        </>
    )

}