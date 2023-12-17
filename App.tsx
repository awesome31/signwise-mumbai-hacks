import {useEffect, useState} from 'react';
import {initLanguage} from './src/language';
import Navigator from './src/navigation';

const App = () => {
  const [langSet, setLangSet] = useState(false);

  useEffect(() => {
    initLanguage().then(() => setLangSet(true));
  }, []);

  return langSet ? <Navigator /> : null;
};

export default App;
