import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from'../styles/GameLayout.module.css';
import Lane from './elements/Lane';


function GameLayout() {
	const carLane = useSelector(state=>state.game.carLane);

	return (
		<div className={styles.GameLayoutContainer}>

			<Lane lane={0} carInLane={carLane==0}/>
			<Lane lane={1} carInLane={carLane==1}/>
			<Lane lane={2} carInLane={carLane==2}/>
		</div>
	);
}

export default GameLayout;
