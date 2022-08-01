import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./MenuNav.module.scss";

const MenuNav = () => {
    const QuantidadeItensCarrinho = 5;

    const [isOpen, setIsOpen] = React.useState(false);
    const menuToggle = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className={styles.menuBar}>
                <div className={styles.logo}>
                    <h1>Pizzaria ON</h1>
                </div>
                <div className={styles.menuButton}>
                    <button onClick={menuToggle}>
                        <div className={styles.menuToggleLine}></div>
                        <div className={styles.menuToggleLine}></div>
                        <div className={styles.menuToggleLine}></div>
                    </button>
                </div>
            </nav>
            <div className={styles.menu}
                style={{
                    transform: isOpen ? "translateX(0)" : "translateX(98%)"
                }}>
                <ul >
                    <li>
                        <Link to="/cliente/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/cliente/criar-pizza">Criar Pizza</Link>
                    </li>
                    <li>
                        <Link to="/cliente/meus-pedidos">Meus Pedidos</Link>
                    </li>
                    <li>
                        <Link to="/cliente/minha-conta">Minha Conta</Link>
                    </li>
                    <li>
                        <Link to="/cliente/carrinho">
                            Carrinho
                            {
                                QuantidadeItensCarrinho > 0 ?
                                    <span 
                                    className={styles.quantidadeItensCarrinho}>
                                        {QuantidadeItensCarrinho} {
                                            QuantidadeItensCarrinho > 1 ?
                                                "itens" : "item"
                                        }
                                        </span>
                                         :
                                    null

                            }
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MenuNav;