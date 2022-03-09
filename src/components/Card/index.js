import Styles from './Card.module.scss';
import React from 'react'

function Card({onFavorit, title, imageUrl, price, onPlus }){
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

    return(
        <div className={Styles.card}>
         <div className={Styles.favorit} onClick={onFavorit}>
           <img src="/img/unliked.svg" alt="Unliked"/>
          </div>
          <img width={133} height={112} src={imageUrl} alt=""/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>цена:</span>
              <b>{price} руб.</b>
            </div>
            <img className={Styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>
          </div>
        </div>
    );
}

export default Card;