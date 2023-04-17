import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Route path="/todos" component= {TodoFeature} />
        <Route path="/albums" component= {AlbumFeature} />
        <Route path="/colors" component= {ColorBox} />
        <Route path="/counters" component= {Counter} />
        <Footer />
          {/* <ColorBox />
          <Counter />
          <TodoFeature />
          <AlbumFeature /> */}
      </header>
    </div>
  );

  // const age = 18
  // const isMale = true;
  // const student = {
  //   name: 'Bac ng',
  //   class: 'IT45',
  //   role: 'lead',
  //   proLanguage: ['Ruby', 'React', 'Python']
  // };
  // const colorList = ['red', 'green', 'blue']

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //     <p>bac dev</p>
  //     <p>Xin chao {student.name} - {age} - {isMale ? 'Male' : 'Female'}</p>
  //     {isMale && "You are handsome"}
  //     <p>{student.proLanguage[0]}</p>
  //     <ul>
  //     {colorList.map(color => (
  //         <li style = {{ color }} > {color}</li>
  //       ))}
  //     </ul>
  //     </header>
  //   </div>
  // );

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
