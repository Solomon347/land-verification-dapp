import { useState } from 'react';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import toast from 'react-hot-toast';

export default function Transfer() {
  const [landId, setLandId] = useState('');
  const [newOwner, setNewOwner] = useState('');
  const [loading, setLoading] = useState(false);

  const transferLand = async () => {
    if (!landId || !newOwner) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Transferring ownership...');

    // Simulated transfer
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success(`✅ Land ${landId} transferred to ${newOwner}`);
      setLoading(false);
      setLandId('');
      setNewOwner('');
    }, 1500);
  };

  return (
    <ProtectedRoute>
      <Layout>
        <div className="container">
          <h1>🔄 Transfer Land Ownership</h1>
          <p className="subtitle">
            Transfer your land to a new owner. This action is permanent.
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

            <label>New Owner Address</label>
            <input
              type="text"
              placeholder="e.g., 0x1234...5678"
              value={newOwner}
              onChange={(e) => setNewOwner(e.target.value)}
              className="input"
            />

            <button onClick={transferLand} disabled={loading} className="button">
              {loading ? 'Transferring...' : 'Transfer Ownership'}
            </button>

            <div className="warning">
              ⚠️ Warning: This action cannot be undone. Make sure the address is correct.
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }
}
