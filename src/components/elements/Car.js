import { CARS, DEFAULT_CAR_NAME } from '../../config/carConfig';
import styles from '../../styles/Car.module.css';


function Car({name}) {
  return (
    <div className={styles.CarContainer}>
      <img src={CARS[name] || CARS[DEFAULT_CAR_NAME]}  className={styles.CarImg} />
    </div>
  );
}

export default Car;
