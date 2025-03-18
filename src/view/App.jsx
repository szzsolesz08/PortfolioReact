import './App.css'
import Languages from './Languages';
import Projects from './Projects';
import Contact from './Contact';
import Introduction from './Introduction';
import Navigation from './Navigation';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useTheme from '../hooks/useTheme';

function App() {
  useScrollAnimation();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Navigation />
      <main>
        <Introduction />
        <Languages />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App
