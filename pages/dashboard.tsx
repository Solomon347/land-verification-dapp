import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { getUser } from '../utils/auth';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [lands, setLands] = useState([
    {
      id: '12345',
      location: 'Lagos, Victoria Island, Plot 45',
      registeredDate: '2024-12-15',
      documentHash: 'QmX7s9...3KpZ',
      status: 'Verified'
    },
    {
      id: '67890',
      location: 'Abuja, Maitama District, Plot 12',
      registeredDate: '2025-01-10',
      documentHash: 'QmY9t2...7LmA',
      status: 'Verified'
    },
  ]);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <ProtectedRoute>
      <Layout>
        <div className="container">
          <div className="dashboard-header">
            <h1>Your Land Portfolio</h1>
            <p className="subtitle">Welcome back, {user?.email || 'User'}</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏡</div>
              <div className="stat-value">{lands.length}</div>
              <div className="stat-label">Registered Lands</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-value">{lands.filter(l => l.status === 'Verified').length}</div>
              <div className="stat-label">Verified</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔄</div>
              <div className="stat-value">0</div>
              <div className="stat-label">Pending Transfers</div>
            </div>
          </div>

          <div className="lands-section">
            <div className="section-header">
              <h2>Your Registered Lands</h2>
              <a href="/register" className="button-outline">
                + Register New Land
              </a>
            </div>
            
            {lands.length === 0 ? (
              <div className="empty-state">
                <p>No lands registered yet</p>
                <a href="/register" className="button">
                  Register Your First Land
                </a>
              </div>
            ) : (
              <div className="lands-grid">
                {lands.map(land => (
                  <div key={land.id} className="land-card">
                    <div className="land-header">
                      <span className="land-id">Land #{land.id}</span>
                      <span className="status-badge verified">
                        {land.status}
                      </span>
                    </div>
                    <div className="land-body">
                      <div className="land-info">
                        <strong>📍 Location:</strong>
                        <span>{land.location}</span>
                      </div>
                      <div className="land-info">
                        <strong>📅 Registered:</strong>
                        <span>{land.registeredDate}</span>
                      </div>
                      <div className="land-info">
                        <strong>📄 Document:</strong>
                        <span className="hash">{land.documentHash}</span>
                      </div>
                    </div>
                    <div className="land-actions">
                      <a 
                        href={`https://gateway.pinata.cloud/ipfs/${land.documentHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-outline-small"
                      >
                        View Docs
                      </a>
                      <a href="/transfer" className="button-outline-small">
                        Transfer
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
