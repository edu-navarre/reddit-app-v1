import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorMessage.module.css';
import warningIcon from '../assets/warning-icon.svg'; // optional

const ErrorMessage = ({ message, subtext, onRetry }) => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.errorContainer} role="alert" aria-live="assertive">
      <div className={styles.iconWrapper}>
        <img src={warningIcon} alt="Warning" />
      </div>
      <p className={styles.errorText}>{message || "Unable to load content"}</p>
      {subtext && <p className={styles.errorSubtext}>{subtext}</p>}
      <div className={styles.buttonGroup}>
        {onRetry && (
          <button className={styles.retryButton} onClick={onRetry}>
            Try Again
          </button>
        )}
          <button className={styles.homeButton} onClick={() => navigate('/')}>
            Go To Homepage
          </button>
      </div>
    </div>
  );
};

export default ErrorMessage;