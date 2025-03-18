import useTheme from '../hooks/useTheme';
import ThemeToggle from '../components/ThemeToggle';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

function Navigation() {
    const { isDarkMode, toggleTheme } = useTheme();
    const { scrollToSection } = useSmoothScroll();

    return (
        <>
            <nav className="main-nav">
                <div className="nav-container">
                    <ul>
                        <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}><i className="fas fa-home"></i> Home</a></li>
                        <li><a href="#tech-stack" onClick={(e) => scrollToSection(e, 'tech-stack')}><i className="fas fa-laptop-code"></i> Tech Stack</a></li>
                        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}><i className="fas fa-code"></i> Projects</a></li>
                        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}><i className="fas fa-envelope"></i> Contact</a></li>
                    </ul>
                    <div className="theme-toggle-wrapper">
                        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;