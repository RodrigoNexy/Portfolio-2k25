import { useLanguage } from '../contexts/LanguageContext';
import { pt } from '../translations/pt';
import { en } from '../translations/en';

/**
 * Hook customizado para traduções
 * Segue Single Responsibility Principle - apenas gerencia traduções
 * Segue Dependency Inversion Principle - componentes dependem da abstração (hook)
 */
export const useTranslation = () => {
  const { language } = useLanguage();

  const translations = {
    pt,
    en,
  };

  const t = (key) => {
    // Suporta chaves aninhadas como 'banner.iAm' ou 'about.stats.months'
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Se não encontrar a tradução, retorna a chave ou tenta em português
        const ptValue = getNestedValue(pt, keys);
        return ptValue || key;
      }
    }

    return value || key;
  };

  // Função auxiliar para buscar valores aninhados
  const getNestedValue = (obj, keys) => {
    let value = obj;
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return null;
      }
    }
    return value;
  };

  return {
    t,
    language,
  };
};

