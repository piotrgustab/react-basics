import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';


const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} src={props.imgSrc}></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imgSrc: PropTypes.string,
};

export default Hero; 