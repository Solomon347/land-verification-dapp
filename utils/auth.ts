export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('terratrust_user');
};

export const getUser = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('terratrust_user');
  return user ? JSON.parse(user) : null;
};

export const setUser = (email: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('terratrust_user', JSON.stringify({ email, loginDate: new Date().toISOString() }));
};

export const logout = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('terratrust_user');
  window.location.href = '/';
};
