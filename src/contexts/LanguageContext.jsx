/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

/**
 * Provider de idioma - Gerencia o estado global do idioma
 * Segue Single Responsibility Principle - apenas gerencia idioma
 * 
 * @param {Object} props - Props do componente
 * @param {React.ReactNode} props.children - Componentes filhos
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Recupera idioma salvo no localStorage ou usa 'pt' como padrão
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'pt';
  });

  useEffect(() => {
    // Salva o idioma no localStorage sempre que mudar
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook customizado para usar o contexto de idioma
 * Segue Dependency Inversion Principle - componentes dependem da abstração (hook)
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

