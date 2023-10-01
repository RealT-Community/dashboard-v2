import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const usexDAIUSDRate = (): number | undefined => {
  const [xDaiUSDRate, setXDaiUSDRate] = useState<number>();

  useEffect(() => {
    (async () => {
      try {
        const RPC = 'https://rpc.ankr.com/gnosis';
        const provider = new ethers.providers.JsonRpcProvider(RPC);
        const contract = new ethers.Contract(
          '0x678df3415fc31947dA4324eC63212874be5a82f8',
          ['function latestAnswer() view returns (int256)'],
          provider
        );
        const decimals = 8;
        const priceFeedResponse = await contract.latestAnswer();
        const priceFeed = Number(ethers.utils.formatUnits(priceFeedResponse, decimals));
        setXDaiUSDRate(priceFeed);
      } catch (error) {
        console.error('Error fetching xDai price:', error);
      }
    })();
  }, []);
  return xDaiUSDRate;
}

export default usexDAIUSDRate;
