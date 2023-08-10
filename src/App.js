import './App.css';
import LanguageSeletor from './components/LanguageSeletor';
import {LanguageContext} from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import UserCreate from './components/UserCreate';
function App() {
  return (
    <div className="App">
      <LanguageContext>
        <LanguageSeletor></LanguageSeletor>
        <ColorContext.Provider value="green">
          <UserCreate ></UserCreate>
        </ColorContext.Provider>
      </LanguageContext>
    </div>
  );
}

export default App;
