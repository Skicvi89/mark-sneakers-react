import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setcartItems] = React.useState([]);
  const [searchValue, setsearchValue] = React.useState('');
  const [cartOpenet, setCartOpenent] = React.useState(false);

  React.useEffect(() => {
    fetch('https://622748ccd1b3ff08c1aafde5.mockapi.io/Items').then(res =>{
    return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) =>{
    setcartItems(prev => [... prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setsearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpenet && <Drawer items={cartItems} onClose={() => setCartOpenent(false)} />}
      <Header onClickCart={() => setCartOpenent(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onChangeSearchInput} placeholder="Поиск.." />
        </div>
        </div>
       <div className="d-flex flex-wrap">
       {items.map((item, index)=>(
         <Card 
         key={index}
         title={item.title} 
         price={item.price} 
         imageUrl={item.imageUrl} 
         onFavorit={() => console.log('добавлено')}
         onPlus={(obj) => onAddToCart(obj)} />
       ))}
       </div>
      </div>
    </div>
  );
}
export default App;
