import { ApiPromise, WsProvider } from '@polkadot/api';
import { formatBalance } from '@polkadot/util';
import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { selectApi, setApi, setProperties } from '../store/api';

const useApi = () => {
  const dispatch = useAppDispatch();
  const api = useSelector(selectApi);

  useEffect(() => {
    (async () => {
      if (api) return;
      const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
      const apiInstance = await ApiPromise.create({ provider: wsProvider });

      const [properties] = await Promise.all([apiInstance.rpc.system.properties()]);

      const tokenSymbol = properties.tokenSymbol.unwrap()[0].toString();
      const tokenDecimals = properties.tokenDecimals.unwrap()[0].toNumber();

      formatBalance.setDefaults({
        decimals: tokenDecimals,
        unit: tokenSymbol,
      });

      dispatch(setApi(apiInstance));
      dispatch(setProperties(properties));
    })();
  }, [api]);

  return {
    api,
  };
};

export default useApi;
