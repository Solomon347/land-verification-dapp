import { useState } from "react";
import { connect } from "starknet";
import Layout from "../components/Layout";
import { getContract } from "../utils/starknet";

export default function TransferLand() {
  const [landId, setLandId] = useState("");
  const [newOwner, setNewOwner] = useState("");

  const transfer = async () => {
    const { account } = await connect();
    const contract = getContract(account);
    await contract.transfer_land(landId, newOwner);
    alert("Ownership transferred successfully");
  };

  return (
    <Layout>
      <div className="card">
        <h3>Transfer Ownership</h3>
        <input placeholder="Land ID" onChange={e => setLandId(e.target.value)} />
        <input placeholder="New Owner Address" onChange={e => setNewOwner(e.target.value)} />
        <button onClick={transfer}>Transfer</button>
      </div>
    </Layout>
  );
}
