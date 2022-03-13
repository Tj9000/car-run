import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { CARS } from '../config/carConfig';
import { setCar } from '../redux/slice/app.slice';
import styles from'../styles/SelectCar.module.css';
import Car from './elements/Car';


function SelectCar() {
  const selectedCar = useSelector(state=> state.app.selectedCar);
  const dispatch = useDispatch();

  return (
    <div className={styles.selectCarContainer}>
      
      {
        Object.keys(CARS).map(c=>
          <div
          key={c}
           className={ clsx([styles.carSelectionDiv, selectedCar==c?styles.carSelectionDivSelected: null])} 
           onClick={()=>{
            dispatch(setCar(c));
          }}>
            <Car name={c}/>
          </div>
        )
      }
    </div>
  );
}

export default SelectCar;
