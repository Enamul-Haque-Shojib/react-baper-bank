import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutputBox from './Components/OutputBox/OutputBox';
import InputBox from './Components/InputBox/InputBox';

function App() {
  return (
    <div className="App">
      <h1>Baper Bank</h1>
      <OutputBox></OutputBox>
      <InputBox></InputBox>
    </div>
  );
}

export default App;
