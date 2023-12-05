import React from 'react';
import styles from './PageNotFound.module.css';
import { connect } from 'react-redux';

const PageNotFound = ({relevantData}) => {

  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundHeader}>404 - Page Not Found</h1>
      <p className={styles.notFoundMessage}>
        The page you are looking for might have been removed or doesn't exist. 
        <br /> 
        Please go back to Nucleus' <a className={styles.homeLink} onClick={() => window.location.href = "https://nucleushq.io"}>Main Page</a>.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      relevantData: state?.programData
    }
}


export default connect(mapStateToProps, null)(PageNotFound);
