import { useDispatch, useSelector } from 'react-redux';
import styles from'../styles/GameLayout.module.css';


function DebugLayout() {
	const gameOver = useSelector(state=>state.game.gameOver);
    const laneElements = useSelector(state=> state.game.elements[0]);

	const dispatch = useDispatch();

		return (
			<div className={styles.DebugLayoutContainer}>

				<div className={styles.DebugStatContainer} >
					<div >
						elemLength&ensp;-&ensp;{laneElements.length}
					</div>
					<div >
						gameOver&ensp;-&ensp;{gameOver}
					</div>
				</div>

			</div>
		);
	
}

export default DebugLayout;
