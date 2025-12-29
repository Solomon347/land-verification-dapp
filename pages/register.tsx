import { useState } from 'react';
import Layout from '../components/Layout';

export default function Register() {
  const [landId, setLandId] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const registerLand = async () => {
    if (!landId || !location || !file) {
      alert('Please fill all fields and upload a document');
      return;
    }

    setLoading(true);

    // Simulated registration (in real app, uploads to IPFS then blockchain)
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      alert(`✅ Land ${landId} registered successfully!`);
      
      // Reset form
      setLandId('');
      setLocation('');
      setFile(null);
      setSuccess(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="container">
        <h1>📝 Register Your Land</h1>
        <p className="subtitle">
          Register your land ownership on the blockchain permanently.
        </p>

        <div className="card">
          <label>Land ID</label>
          <input
            type="text"
            placeholder="e.g., 12345"
            value={landId}
            onChange={(e) => setLandId(e.target.value)}
            className="input"
          />

          <label>Location Description</label>
          <input
            type="text"
            placeholder="e.g., Lagos, Victoria Island, Plot 45"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />

          <label>Survey Document (PDF or Image)</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="input"
          />
          {file && <p className="file-name">📎 {file.name}</p>}

          <button onClick={registerLand} disabled={loading} className="button">
            {loading ? 'Registering...' : 'Register Land'}
          </button>

          {success && (
            <div className="success-message">
              ✅ Registration successful! Your land is now on the blockchain.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
