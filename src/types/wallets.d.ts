// TypeScript declaration for Ethereum wallet types
import { EthersProvider } from "ethers";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<string[]>;
      on?: (event: string, callback: (args: unknown) => void) => void;
      removeListener?: (event: string, callback: () => void) => void;
      isMetaMask?: boolean;
    };
  }
}
