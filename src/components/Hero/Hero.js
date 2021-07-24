import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <p><img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" className={styles.image} ></img></p>
      </header>
    )
  }
}

export default Hero;