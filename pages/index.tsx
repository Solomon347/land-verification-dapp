import { useState } from 'react';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

export default function Home() {
  const [landId, setLandId] = useState('');
  const [landInfo, setLandInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const verifyLand = async () => {
    if (!landId) {
      toast.error('Please enter a Land ID');
      return;
    }

    setLoading(true);
    
    // Simulated verification
    setTimeout(() => {
      setLandInfo({
        owner: '0x1234...5678',
        location: 'Lagos, Victoria Island, Plot 45',
        documentHash: 'QmX7s9...3KpZ',
        registered: '2024-12-15'
      });
      setLoading(false);
      toast.success('✅ Land verified successfully');
    }, 1500);
  };

  return (
    <Layout>
      <div className="container">
        <h1>🔍 Verify Land Ownership</h1>
        <p className="subtitle">
          Check land ownership before you buy. Protect yourself from fraud.
        </p>

        <div className="card">
          <label>Enter Land ID</label>
          <input
            type="text"
            placeholder="e.g., 12345"
            value={landId}
            onChange={(e) => setLandId(e.target.value)}
            className="input"
          />
          <button onClick={verifyLand} disabled={loading} className="button">
            {loading ? 'Verifying...' : 'Verify Land'}
          </button>
        </div>

        {landInfo && (
          <div className="result-card">
            <h2>✅ Land Information</h2>
            <div className="info-row">
              <strong>Owner:</strong> {landInfo.owner}
            </div>
            <div className="info-row">
              <strong>Location:</strong> {landInfo.location}
            </div>
            <div className="info-row">
              <strong>Document Hash:</strong> {landInfo.documentHash}
            </div>
            <div className="info-row">
              <strong>Registered:</strong> {landInfo.registered}
            </div>
            <a 
              href={`https://gateway.pinata.cloud/ipfs/${landInfo.documentHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              📄 View Survey Document
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
