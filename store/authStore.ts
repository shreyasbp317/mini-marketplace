import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, role: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loadToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  login: async (token: string, role: string, name: string) => {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('role', role);
    await AsyncStorage.setItem('name', name);

    set({
      token,
      user: { name, email: '', role: role as 'admin' | 'user' },
      isAuthenticated: true,
    });
  },

  logout: async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('role');
    await AsyncStorage.removeItem('name');

    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },

  loadToken: async () => {
    const token = await AsyncStorage.getItem('token');
    const role = await AsyncStorage.getItem('role');
    const name = await AsyncStorage.getItem('name');

    if (token && role && name) {
      set({
        token,
        user: { name, email: '', role: role as 'admin' | 'user' },
        isAuthenticated: true,
      });
    }
  },
}));