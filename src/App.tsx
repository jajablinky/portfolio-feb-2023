import './App.css'
import intrusiveObject from './assets/intrusiveobject.png';

function App() {
  return (
    <>
    <div className="centered">
    <div>
        <p className='loading' style={{ textAlign: 'left', marginBottom: '0px', opacity: '45%', fontSize: '12px', animation: 'movement 20sec linear infinite' }}>loading...</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <h1 style={{ marginBottom: '0px' }}>GeOfFrey</h1>
        <p style={{ marginTop: '0px', marginBottom: '0px' }}>FullStack Developer</p>
        <p style={{ marginTop: '0px' }}>jajAblinKy</p>
      </div>
    </div>
    <div className='intrusive-object'><img src={intrusiveObject} alt='intrusive-object'/></div>
    </>
  )
}

export default App
