import { useSelector } from 'react-redux';
import { ELEMENT_IDX } from '../../config/gameConfig';
import styles from'../../styles/GameLayout.module.css';
import Car from './Car';
import Coin from './Coin';
import Obstacle from './Obstacle';

const Lane = ({lane, carInLane}) => {
    const selectedCar = useSelector(state=> state.app.selectedCar);
    const laneElements = useSelector(state=> state.game.elements[lane]);

    const RenderCar = () => {
        return(<div className={styles.CarInLane}>
            <Car name={selectedCar}/>
        </div>);
    }
    const RenderCoin = ({steps}) => {
        return(<div className={styles.CoinInLane} style={{left: steps*10 }}>
            <Coin/>
        </div>);
    }
    const RenderObstacle = ({steps}) => {
        return(<div className={styles.CoinInLane} style={{left: steps*10 }}>
            <Obstacle/>
        </div>);
    }

    // console.log(lane, laneElements);
    return (
        <div className={styles.LaneContainer}>
            { carInLane ? (
                <RenderCar />
            ) : null }
            {
                laneElements.map((e,i)=>{
                    if(e==ELEMENT_IDX.COIN) {
                        return <RenderCoin steps={i}/>
                    }
                    if(e==ELEMENT_IDX.OBSTACLE) {
                        return <RenderObstacle steps={i}/>
                    }
                })
            }
        </div>
    );
}

export default Lane;