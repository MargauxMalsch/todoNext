import React from "react";
import Image from "next/image";
import styles from '../styles/Card.module.css';

export default function Card(props) { 
    return(
    <div className={styles.cardcontainer}> 
        <h2>{props.title}</h2>
        <img 
        width='100%'
        height= '100%'
        src={props.image} alt=""/>
        <p>{props.desc}</p>
        <h2>{props.price}€</h2>
        <button style={{
            margin: '10px',
        }}>Acheter</button>
    </div>
    )}