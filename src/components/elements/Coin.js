import styles from '../../styles/Coin.module.css';
import coinImg from '../../assets/coin2.png';

function Coin({name}) {
  return (
    <div className={styles.CoinContainer}>
      <img src={coinImg} className={styles.CoinImg} />
    </div>
  );
}

export default Coin;
