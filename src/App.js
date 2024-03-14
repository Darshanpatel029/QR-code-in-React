import './App.css';
import QRCode from 'react-qr-code';

function App() {
  return (
    <div className="App">
      <h1>Hello QR</h1>
      <div>
        <QRCode
          value="https://drive.google.com/file/d/1OZ-cQVMVzt4uTb27n4iUiKUHLw8tXmyd/view?usp=drivesdk"

          renderAs="svg"
          style={{
            width: "80vmin",
            height: "80vmin"
          }}
        />
      </div>
    </div>
  );
}

export default App;
