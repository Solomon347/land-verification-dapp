import { useState } from "react";
import Layout from "../components/Layout";
import { getContract } from "../utils/starknet";
import { uploadToIPFS } from "../utils/ipfs";

export default function RegisterLand() {
  const [landId, setLandId] = useState("");
  const [locationHash, setLocationHash] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const register = async () => {
    if (!file) return alert("Upload land document");

    const ipfsHash = await uploadToIPFS(file);
    const { account } = await connect();
    const contract = getContract(account);

    await contract.register_land(landId, locationHash, ipfsHash);
    alert("Land registered successfully");
  };

  return (
    <Layout>
      <div className="card">
        <h3>Register Land</h3>
        <input placeholder="Land ID" onChange={e => setLandId(e.target.value)} />
        <input placeholder="Location Hash" onChange={e => setLocationHash(e.target.value)} />
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
        <button onClick={register}>Register</button>
      </div>
    </Layout>
  );
}
