import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span></h1>
        <form>
        <div className="basic">
          <input type="text" placeholder={'+200 new samsung tv'}/>
          <input type="datetime-local"/>
        </div>
          <div className="description">
            <input type="text" placeholder={'description'}/>
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
