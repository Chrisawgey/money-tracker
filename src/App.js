import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name,setName] = useState('');
  const [datetime,setdateTime] = useState('');
  const [description,setDescription] = useState('');
  const [transactions,setTransactions] = useState([]);
  
  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []); 

  async function getTransactions(){
    const url = process.env.REACT_APP_API_URL+'/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
      ev.preventDefault();
      const url = process.env.REACT_APP_API_URL+'/transaction';
      const price = name.split(' ')[0];
      fetch(url, { 
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({
          price,
          name:name.substring(price.length + 1), 
          description, 
          datetime
        })
      })
      .then(response => {
        response.json().then(json => {
          setName('');
          setdateTime('');
          setDescription('');
          console.log('result', json);
        });
      });      
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
          {transactions.length > 0 && transactions.map(transaction =>(
            <div className="transaction">
            <div className="left">
              <div className="name">{transaction.name}</div>
              <div className="description">{transaction.description}</div>
            </div>
            <div className="right">
              {console.log(transaction.price)}
              <div className={"price " + (transaction.price<0?'rojo':'green')}>
                {transaction.price}</div>
               <div className="datetime">2023-04-12 13:30</div>
               </div>
              </div>
          ))}
          </div>
    </main>
  );
}

export default App;