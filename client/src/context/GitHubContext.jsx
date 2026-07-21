import { createContext, useContext, useState, useEffect } from 'react';

const GitHubContext = createContext();

export function GitHubProvider({ children }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Le fetch vers l'API GitHub sera ajouté en Phase 6
    setLoading(false);
  }, []);

  return (
    <GitHubContext.Provider value={{ githubData, loading }}>
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub() {
  return useContext(GitHubContext);
}