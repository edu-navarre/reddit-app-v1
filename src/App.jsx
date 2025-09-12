import Counter from './Features/Counter/Counter';
import ExampleComponent from './Features/Example/ExampleComponent';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <ExampleComponent />
    </div>
  );
}

export default App;