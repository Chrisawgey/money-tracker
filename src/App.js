import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('');
  const [datetime,setdateTime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction() {
    function addNewTransaction(ev) {
      ev.preventDefault();
      const url = process.env.REACT_APP_API_URL;
      console.log(url);
    }
  }
  return (
    <main>
      <h1>
        $400<span>.00</span></h1>
        <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" 
                 value={name}
                 onChange={ev => setName(ev.target.value)}
                 placeholder={'+200 new samsung tv'}/>
          <input value={datetime} 
                 onChange={ev => setdateTime(ev.target.value)}
                 type="datetime-local"/>
        </div>
          <div className="description">
            <input type="text" 
                   value={description} 
                   onChange={ev => setDescription(ev.target.value)}
                   placeholder={'description'}/>
          </div>
          <button type="submit">Add New Transaction</button>
        </form>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New TV</div>
              <div className="description">Impulsive buyer</div>
            </div>
            <div className="right">
              <div className="price rojo">-$500</div>
               <div className="datetime">2023-04-12 13:30</div>
               </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Gig job new website</div>
              <div className="description">Impulsive buyer</div>
            </div>
            <div className="right">
              <div className="price green">+$400</div>
              <div className="datetime">2023-04-12 13:30</div>
              </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Cemita</div>
              <div className="description">Impulsive buyer</div>
            </div>
            <div className="right">
              <div className="price rojo"> -$32 </div>
              <div className="datetime"> 2023-04-12 13:30 </div>
              </div>
          </div>
        </div>
    </main>
  );
}

export default App;
