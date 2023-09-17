import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <p>email: contact@id2.company</p>
      <a href="https://www.linkedin.com/company/id2startup/" target="_blank" ><img src={require('../../assets/linkedin.png')} className={styles.image}/></a>
      <a href="https://github.com/iD2-tech" target="_blank" ><img src={require('../../assets/github.png')} className={styles.image}/></a>
    </div>
  )
}

export default Contact;