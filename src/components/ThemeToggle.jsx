import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeToggle({ isDarkMode, toggleTheme }) {
    return (
        <button 
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
    );
}

export default ThemeToggle;
