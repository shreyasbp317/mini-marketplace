import axios from 'axios';

const API_URL = 'http://10.0.0.223:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
}

export interface ProductCreate {
  name: string;
  description?: string;
  price: number;
  stock: number;
}

export const authAPI = {
  register: (data: RegisterData) => api.post('/auth/register', data),
  login: (credentials: LoginCredentials) => api.post('/auth/login', credentials),
};

export const productAPI = {
  getAll: () => api.get<Product[]>('/products'),

  create: (data: ProductCreate, token: string) =>
    api.post<Product>('/products', data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  update: (id: number, data: Partial<ProductCreate>, token: string) =>
    api.put<Product>(`/products/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  delete: (id: number, token: string) =>
    api.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default api;