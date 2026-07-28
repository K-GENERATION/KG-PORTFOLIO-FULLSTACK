import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { GitHubProvider } from './context/GitHubContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GitHubProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GitHubProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;