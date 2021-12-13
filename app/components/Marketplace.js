import React, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css';
import Card from './Card';

export default function Marketplace() {
    const[user, setUser] = useState(null);
   return(
       <div className={styles.marketcontainer}>
           <h3>Marketplace</h3>

           <Card title="Chaise rose" 
            image="https://www.dya-shopping.fr/media/catalog/product/cache/6e9884bff056c6c2163c6eec14da61cc/c/h/chaise-en-velours-rose-et-pieds-en-metal-ariel-2.jpg"
            desc="Chaise moelleuse pour pas avoir mal à ses fesses" price="900"/>
           
       </div>
   )

} 