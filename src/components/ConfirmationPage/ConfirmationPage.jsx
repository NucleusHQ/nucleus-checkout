import React from 'react';
import styles from './ConfirmationPage.module.css';

const ConfirmationPage = ({ title }) => {
  return (
    <div className={styles.confirmationContainer}>
      <h1 className={styles.congratulations}>Congratulations!</h1>
      <p>
        You've successfully enrolled in the program: <span className={styles.title}>{title}</span>.
      </p>
      <p>Please check your email for further updates.</p>
      <p>If you have any questions, feel free to contact our team at <a className={styles.contactLink} href="mailto:contact@nucleushq.io">contact@nucleushq.io</a>. Our team is here to assist you.</p>
    </div>
  );
};

export default ConfirmationPage;
