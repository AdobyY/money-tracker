import './App.css';

function App() {
  return (
    <main>
     <h1>$400<span>.00</span></h1>
     <form>
      <div className='basic'>
        <input type='text' placeholder={'+200 new tv'}/>
        <input type='datetime-local'/>
      </div>
      <div className='description'>
        <input type='text'placeholder={'description'}/>
      </div>
      <button type='submit'>Add new transaction</button>
     </form>
     <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new TV</div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>2023-10-31 23:12</div>
          </div>
        </div>
     </div>
     <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for new TV</div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>2023-10-31 23:12</div>
          </div>
        </div>
     </div>
    </main>
  );
}

export default App;
