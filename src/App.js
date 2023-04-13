import logo from './logo.svg';
import './App.css';

function App() {
  const age = 18
  const isMale = true;
  const student = {
    name: 'Bac ng',
    class: 'IT45',
    role: 'lead',
    proLanguage: ['Ruby', 'React', 'Python']
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>bac dev</p>
      <p>Xin chao {student.name} - {age} - {isMale ? 'Male' : 'Female'}</p>
      {isMale && "You are handsome"}
      <p>{student.proLanguage[0]}</p>
      <ul>
      {colorList.map(color => (
          <li style = {{ color }} > {color}</li>
        ))}
      </ul>
      </header>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
