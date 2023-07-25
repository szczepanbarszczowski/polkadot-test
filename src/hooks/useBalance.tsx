import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatBalance } from '@polkadot/util';
import { selectPair } from '../store/auth';
import { selectBalance, setBalance } from '../store/api';
import { useAppDispatch } from '../store';
import useApi from './useApi';

const useBalance = () => {
  const dispatch = useAppDispatch();
  const { api } = useApi();
  const pair = useSelector(selectPair);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    const getBalance = async () => {
      if (api) {
        const { data: balance } = await api.query.system.account(pair.address);

        api.query.system.account(
          pair.address,
          ({ data: { free: currentFree }, nonce: currentNonce }) => {
            const change = currentFree.sub(balance.free);

            if (!change.isZero()) {
              console.log(`New balance change of ${change}, nonce ${currentNonce}`);

              dispatch(setBalance(formatBalance(currentFree)));
            }
          }
        );

        dispatch(setBalance(formatBalance(balance.free)));
      }
    };

    getBalance();
  }, [api, balance, pair]);

  return balance;
};

export default useBalance;
