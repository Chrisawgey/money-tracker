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
              <div className="name">New samsung TV</div>
              <div className="description">Impulsive buyer</div>
            </div>
            <div className="right"></div>
              <div className="price">$500</div>
              <div className="datetime">2023-04-12 13:30</div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">New samsung TV</div>
              <div className="description">Impulsive buyer</div>
            </div>
            <div className="right"></div>
              <div className="price">$500</div>
              <div className="datetime">2023-04-12 13:30</div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">New samsung TV</div>
              <div className="description">Impulsive buyer</div>
            </div>
            <div className="right"></div>
              <div className="price">$500</div>
              <div className="datetime">2023-04-12 13:30</div>
          </div>
        </div>
    </main>
  );
}

export default App;
