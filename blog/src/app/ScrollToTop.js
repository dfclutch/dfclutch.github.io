import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';

function ScrollToTop() {
  const navigation = useNavigation()

  useEffect(() => {
    const unlisten = navigation.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default ScrollToTop;