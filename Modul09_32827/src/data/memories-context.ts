import { createContext } from 'react';

export interface Memory {
  id: string;
  imagePath: string;
  title: string;
  type: 'good' | 'bad';
  base64Url: string;
  lat: number;
  lng: number;
}

const MemoriesContext = createContext<{
  memories: Memory[];
  addMemory: (
    path: string,
    base64Data: string,
    title: string,
    type: 'good' | 'bad',
    lat: number,
    lng: number
  ) => void;
}>({
  memories: [],
  addMemory: () => {},
});

export default MemoriesContext;
