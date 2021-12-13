import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function NavBar() {
    const[user, setUser] = useState(null);
   return(
       <div className={styles.navcontainer}>
<h3>NTF Marketplace</h3>
<p>Menu</p>
<div>
    { user ? (<button> Logout </button>) : (<button> Login </button>) }
</div>
       </div>
   )

} 