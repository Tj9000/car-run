import { useDispatch, useSelector } from 'react-redux';
import { playAgain } from '../redux/slice/game.slice';
import styles from'../styles/GameLayout.module.css';


function ResultLayout() {
	const gameOver = useSelector(state=>state.game.gameOver);
	const score = useSelector(state=>state.game.score);
	const coinsCollected = useSelector(state=>state.game.coinsCollected);

	const dispatch = useDispatch();

	const onPlayAgain = () => {
		console.log("Clicked play again")
		dispatch(playAgain());
	}
	if(gameOver) {
		return (
			<div className={styles.ResultLayoutContainer}>
				<div  className={styles.ResultGameOverContainer} >
					Game Over!
				</div>

				<div className={styles.ResultScoreContainer} >
					<div >
						coins&ensp;-&ensp;{coinsCollected}
					</div>
					<div >
						{score}&ensp;-&ensp;Score
					</div>
				</div>

				<div  className={styles.ResultPlayAgainContainer} onClick={onPlayAgain}>
					Play Again?
				</div>

			</div>
		);
	} else {
		return null;
	}
}

export default ResultLayout;
