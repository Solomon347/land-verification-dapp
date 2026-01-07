import { useState } from 'react';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

export default function Register() {
  const [landId, setLandId] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const registerLand = async () => {
    if (!landId || !location || !file) {
      toast.error('Please fill all fields and upload a document');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Registering land on blockchain...');

    // Simulated registration
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success(`✅ Land ${landId} registered successfully!`);
      setLoading(false);
      
      // Reset form
      setLandId('');
      setLocation('');
      setFile(null);
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
        </div>
      </div>
    </Layout>
  );
}
