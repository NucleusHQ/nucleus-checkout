import React, { useEffect } from 'react';
import styles from './ConfirmationPage.module.css';
import { connect } from 'react-redux';

const ConfirmationPage = ({ title }) => {

  return (
    <div className={styles.confirmationContainer}>
      <h1 className={styles.congratulations}>Congratulations!</h1>
      <p>
        You have <span style={{color: "#683fbe", fontWeight: "bold"}}>successfully</span> registered for the event<br></br><br></br>
        {/* <span className={styles.title}>{title}</span>. */}
      </p>
      <p>Please check your email for further updates.</p>
      <p>If you have any questions, feel free to contact our team at <a className={styles.contactLink} href="mailto:contact@nucleushq.io">contact@nucleushq.io</a>. Our team is here to assist you.</p>
    </div>
  );
};

const mapStateToProps = (state) => {

  const {programInfo} = state?.programData || {};
  const {title} = programInfo || {};

  return {
      title
  }
}

export default connect(mapStateToProps, null)(ConfirmationPage);
