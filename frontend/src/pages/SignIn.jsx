import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const { login, register, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      if (isSignUp) {
        // Registration
        if (!formData.username || !formData.email || !formData.password) {
          throw new Error('Please fill in all fields');
        }
        
        const result = await register({
          username: formData.username,
          email: formData.email,
          password: formData.password
        });
        
        setMessage({ 
          type: 'success', 
          text: 'Account created successfully! You can now sign in.' 
        });
        
        // Switch to sign in mode after successful registration
        setTimeout(() => {
          setIsSignUp(false);
          setFormData({ username: '', email: formData.email, password: '' });
          setMessage({ type: '', text: '' });
        }, 2000);
        
      } else {
        // Login
        if (!formData.email || !formData.password) {
          throw new Error('Please fill in all fields');
        }
        
        const result = await login({
          email: formData.email,
          password: formData.password
        });
        
        setMessage({ 
          type: 'success', 
          text: `Welcome back, ${result.username}! Redirecting...` 
        });
        
        // Clear form and redirect after successful login
        setFormData({ username: '', email: '', password: '' });
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ username: '', email: '', password: '' });
    setMessage({ type: '', text: '' });
  };

  return (
    <div id="signin" className="p-8 text-[var(--eerie-black)] flex justify-center items-center min-h-screen">
      <div className="bg-[var(--steel-blue)]/60 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md border border-[var(--keppel)]/30">
        <h1 className="text-4xl font-bold text-[var(--eerie-black)] mb-6 text-center">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h1>
        
        {message.text && (
          <div className={`mb-4 p-3 rounded ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-[var(--eerie-black)] text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--eerie-black)] leading-tight focus:outline-none focus:shadow-outline focus:border-[var(--keppel)]"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={loading}
                required={isSignUp}
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-[var(--eerie-black)] text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--eerie-black)] leading-tight focus:outline-none focus:shadow-outline focus:border-[var(--keppel)]"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-[var(--eerie-black)] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--eerie-black)] mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-[var(--keppel)]"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              value={formData.password}
              onChange={handleInputChange}
              disabled={loading}
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-[var(--keppel)] hover:bg-[var(--keppel)]/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </button>
            
            <button
              className="inline-block align-baseline font-bold text-sm text-[var(--eerie-black)] hover:text-[var(--keppel)] disabled:opacity-50"
              type="button"
              onClick={toggleMode}
              disabled={loading}
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
