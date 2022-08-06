import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectEmail,
    selectSenha,
    selectError,
    setEmail,
    setSenha,
    logar,
    LoginData,
} from "../Features/Login/LoginSlice";
import { Link, useNavigate } from "react-router-dom";
import LandingPageModel from "../Components/LandingPageModel";
import styles from "./CriarContaPage.module.scss";



const LoingPage = () => {
    const email = useSelector(selectEmail);
    const senha = useSelector(selectSenha);
    const erro = useSelector(selectError);

    const dispatcher = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        document.title = "Pizzaria ON - Login";
    }, []);

    const tokenRedirect = () => {
        /*
           redirecionar para a pagina dependendo do tipo de usuário
           admin = /admin/menu
           user = /cliente/menu
           cozinheiro = /cozinheiro/menu
           entregador = /entregador/menu
        */
        const relation: Record<string, string> = {
            "admin": "/admin/menu",
            "user": "/cliente/menu",
            "cozinheiro": "/cozinheiro/menu",
            "entregador": "/entregador/menu",
        };

        const token = localStorage.getItem("token");

        if (token) {
            const user = JSON.parse(atob(token.split(".")[1]));
            const redirect: string = relation[user.type];
            navigate(redirect);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData: LoginData = {
            email,
            senha,
        };
        if (erro === "") {
            dispatcher(logar(loginData));
            // sleep for half a second
            setTimeout(() => {
                tokenRedirect();
            } , 500);
        } else {
            return;
        }
    }
    React.useEffect(() => {
        // caso o usuário já tenha feito o login, redirecionar para a página correta
        tokenRedirect();
    }, []);
    return (
        <div className={styles.page}>
            <div className={styles.logo}>
                <h1>Pizzaria ON</h1>
                <h2>Login</h2>
            </div>
            <div>
                <div className={styles.erro}>
                    <h3>
                        {erro}
                    </h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) =>
                                dispatcher(setEmail(e.target.value))
                            }
                            type="email"
                            autoComplete="on"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="senha">Senha</label>
                        <input
                            id="senha"
                            value={senha}
                            onChange={(e) =>
                                dispatcher(setSenha(e.target.value))
                            }
                            type="password"
                            autoComplete="off"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <button
                            onClick={handleSubmit}
                            type="submit">Entrar</button>
                    </div>
                    <div className={styles["form-group"]}>
                        <Link to="/criar-conta">Criar Conta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default () => (

    <LandingPageModel>
        <LoingPage />
    </LandingPageModel>
)