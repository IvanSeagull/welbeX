import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

interface LanguageContextProviderProps {
  children: React.ReactNode;
}
const LanguageContext = React.createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
});

const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
  const [language, setLanguage] = React.useState('en');

  const changeLanguage = (language: string) => {
    setLanguage(language);
    storeData(language);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value == null) {
        await storeData('en');
      }
    } catch (e) {}
  };
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('language', value);
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
      }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguageContext = () => React.useContext(LanguageContext);
