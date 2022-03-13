import styles from '../../styles/Obstacle.module.css';

function Obstacle({name}) {
  return (
    <div className={styles.ObstacleContainer}>
      <div className={styles.ObstacleImg} />
    </div>
  );
}

export default Obstacle;
