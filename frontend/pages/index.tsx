import { useState } from "react";
import Layout from "../components/Layout";
import { getContract } from "../utils/starknet";

export default function VerifyLand() {
  const [landId, setLandId] = useState("");
  const [land, setLand] = useState<any>(null);

  const verify = async () => {
    const contract = getContract();
    const result = await contract.get_land(landId);
    setLand(result);
  };

  return (
    <Layout>
      <div className="card">
        <h3>Verify Land Ownership</h3>
        <input placeholder="Enter Land ID" onChange={e => setLandId(e.target.value)} />
        <button onClick={verify}>Verify</button>
        {land && (
          <div className="card">
            <p><b>Owner:</b> {land.owner}</p>
            <p><b>Location Hash:</b> {land.location_hash}</p>
            <a
              href={`https://gateway.pinata.cloud/ipfs/${land.document_hash}`}
              target="_blank"
            >
              📄 View Land Document
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
