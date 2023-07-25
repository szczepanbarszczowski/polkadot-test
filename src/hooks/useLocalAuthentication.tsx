const { useEffect, useState } = require('react');
import * as LocalAuthentication from 'expo-local-authentication';

export const useCheckAuthHardwareSupport = () => {
  const [hasHardware, setHasHardware] = useState(false);
  useEffect(() => {
    LocalAuthentication.hasHardwareAsync().then((hasHardware) => {
      if (hasHardware) {
        setHasHardware(true);
      }
    });
  }, []);

  return hasHardware;
};
