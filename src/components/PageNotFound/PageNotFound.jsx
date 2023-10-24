import React from 'react';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundHeader}>404 - Page Not Found</h1>
      <p className={styles.notFoundMessage}>
        The page you are looking for might have been removed or doesn't exist. 
        <br /> 
        Please go back to the <a className={styles.homeLink} href="/">homepage</a>.
      </p>
    </div>
  );
};

export default PageNotFound;
