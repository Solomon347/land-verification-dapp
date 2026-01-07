import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';
import { setUser } from '../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Logging you in...');

    // Simulated login (replace with real authentication later)
    setTimeout(() => {
      setUser(email);
      toast.dismiss(loadingToast);
      toast.success('✅ Welcome back!');
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <Layout>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Log in to access your land registry</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="button">
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{' '}
            <a href="/signup" className="link">Sign up</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
