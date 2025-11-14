/**
 * API Utility
 * Centralized API functions for EchoCapsule
 * Features: Base URL configuration, request interceptors, error handling
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Generic fetch wrapper with error handling
 * Add authentication headers, error handling, and response parsing here
 */
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Time Capsules API
 */
export const capsulesAPI = {
  getAll: async () => {
    return apiRequest('/capsules', { method: 'GET' });
  },
  getById: async (id) => {
    return apiRequest(`/capsules/${id}`, { method: 'GET' });
  },
  create: async (data) => {
    return apiRequest('/capsules', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  update: async (id, data) => {
    return apiRequest(`/capsules/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    return apiRequest(`/capsules/${id}`, { method: 'DELETE' });
  },
  unlock: async (id) => {
    return apiRequest(`/capsules/${id}/unlock`, { method: 'PUT' });
  }
};

/**
 * Dreams API
 */
export const dreamsAPI = {
  getAll: async () => {
    return apiRequest('/dreams', { method: 'GET' });
  },
  getById: async (id) => {
    return apiRequest(`/dreams/${id}`, { method: 'GET' });
  },
  create: async (data) => {
    return apiRequest('/dreams', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  update: async (id, data) => {
    return apiRequest(`/dreams/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    return apiRequest(`/dreams/${id}`, { method: 'DELETE' });
  },
  createConnection: async (fromId, toId) => {
    return apiRequest(`/dreams/${fromId}/connect`, {
      method: 'POST',
      body: JSON.stringify({ toId }),
    });
  }
};

/**
 * Voice Journals API
 */
export const journalsAPI = {
  getAll: async () => {
    return apiRequest('/voice-journals', { method: 'GET' });
  },
  getById: async (id) => {
    return apiRequest(`/voice-journals/${id}`, { method: 'GET' });
  },
  create: async (data) => {
    return apiRequest('/voice-journals', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  update: async (id, data) => {
    return apiRequest(`/voice-journals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    return apiRequest(`/voice-journals/${id}`, { method: 'DELETE' });
  },
  addCollaborator: async (id, email) => {
    return apiRequest(`/voice-journals/${id}/collaborators`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
  addComment: async (id, comment) => {
    return apiRequest(`/voice-journals/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
    });
  }
};

/**
 * Authentication API
 */
export const authAPI = {
  login: async (credentials) => {
    const data = await apiRequest('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  },
  register: async (userData) => {
    const data = await apiRequest('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  getCurrentUser: async () => {
    return apiRequest('/users/me', { method: 'GET' });
  }
};

export default apiRequest;

