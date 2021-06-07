import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import React from 'react';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ?  (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="green" />
      John Doe
      < FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    type="button"
    className={styles.signInButton}
  >
    <FaGithub color="#eba417" />
    Sign in with Github
  </button>
  ) 
}