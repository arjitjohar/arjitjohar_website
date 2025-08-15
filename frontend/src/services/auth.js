const API_BASE_URL = 'http://localhost:5000/api/auth';

export const authService = {
  // Register a new user
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data || 'Registration failed');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data || 'Login failed');
      }

      // Store the access token in localStorage
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data));
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  },

  // Get current user from localStorage
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('accessToken');
  },

  // Get all users (for testing purposes)
  getUsers: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data || 'Failed to fetch users');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};
