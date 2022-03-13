import { useSelector } from 'react-redux';
import styles from'../styles/GameLayout.module.css';
import Lane from './elements/Lane';


function ScoreLayout() {
	const score = useSelector(state=>state.game.score);
	const coinsCollected = useSelector(state=>state.game.coinsCollected);
	return (
		<div className={styles.ScoreLayoutContainer}>
			<div className={styles.ScoreDisplayContainer}>
				coins&ensp;-&ensp;{coinsCollected}
			</div>
			<div className={styles.ScoreDisplayContainer}>
				{score}&ensp;-&ensp;Score
			</div>

		</div>
	);
}

export default ScoreLayout;
