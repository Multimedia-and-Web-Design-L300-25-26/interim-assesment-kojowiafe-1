import { createContext, useContext, useEffect, useState } from 'react';

const LivePricesContext = createContext(null);

export function LivePricesProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coinsRes, gainersRes, newRes] = await Promise.all([
          fetch(`${API_URL}/api/crypto`),
          fetch(`${API_URL}/api/crypto/gainers`),
          fetch(`${API_URL}/api/crypto/new`)
        ]);

        if (coinsRes.ok) setCoins(await coinsRes.json());
        if (gainersRes.ok) setGainers(await gainersRes.json());
        if (newRes.ok) setNewListings(await newRes.json());
      } catch (error) {
        console.error("Failed to fetch crypto data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // In a real app, we might poll this or use websockets, but for this demo fetching once is fine
    const intervalId = setInterval(fetchData, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <LivePricesContext.Provider value={{ coins, gainers, newListings, loading }}>
      {children}
    </LivePricesContext.Provider>
  );
}

export const useLivePrices = () => useContext(LivePricesContext);
