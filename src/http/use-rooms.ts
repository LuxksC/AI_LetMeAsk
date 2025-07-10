import { useQuery } from '@tanstack/react-query';
import type { GetRoomsResponse } from './types/get-rooms-response';

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'], // Identificador único da query
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms'); // função que faz a request
      const result: GetRoomsResponse = await response.json(); // converte a resposta para JSON

      return result;
    },
  });
}
