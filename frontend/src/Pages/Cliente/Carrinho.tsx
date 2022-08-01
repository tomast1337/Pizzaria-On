import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Carrinho.module.scss";
import stylesBase from "./clienteBase.module.scss";
import MenuNav from "../../Components/Cliente/MenuNav";

const Carrinho = () => {
    const pizzas = {};
    const pizzasPopulares = {};
    const produtos = {};

    return (
        <>
            <MenuNav />
            <div className={stylesBase.page}>
                <div className={stylesBase.container}>
                    <h1>Carrinho</h1>
                </div>
                <div className={stylesBase.container}>
                    <h2>Itens</h2>
                    <div className={stylesBase.container}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho;