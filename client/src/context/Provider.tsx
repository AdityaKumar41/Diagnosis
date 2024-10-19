import { createContext, ReactNode, useEffect, useState } from "react";
import { VerifyCheckup } from "../hooks/Client";

interface ContextInterface {
  account: string;
  connectWallet: () => void;
}

export const Context = createContext<ContextInterface>({
  account: "",
  connectWallet: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<string>("");
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");
      if (account) return;

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <Context.Provider value={{ account, connectWallet }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
