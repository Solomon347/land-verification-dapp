import { Provider, Contract, RpcProvider } from "starknet";
import abi from "../abi/LandRegistry.json";

const provider = new RpcProvider({
  nodeUrl: "https://starknet-sepolia.public.blastapi.io"
});

export const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";

export const getContract = (account?: any) => {
  return new Contract(abi, CONTRACT_ADDRESS, account ?? provider);
};
