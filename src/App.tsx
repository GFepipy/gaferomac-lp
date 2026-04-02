import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { QuizPage } from './pages/QuizPage';

function App() {
  return (
    <HashRouter>
      <div className="min-h-[100dvh] bg-[var(--color-background)] font-sans text-[var(--color-foreground)] selection:bg-[var(--color-accent)] selection:text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
