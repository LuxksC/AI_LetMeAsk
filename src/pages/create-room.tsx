import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'], // Identificador único da query
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms'); // função que faz a request
      const result: GetRoomsAPIResponse = await response.json(); // converte a resposta para JSON

      return result;
    },
  });

  return (
    <div>
      <h1 className="py-4 text-2xl">Create Room</h1>

      {isLoading && <Skeleton className="h-[20px] w-[100px]" />}

      <div className="flex flex-col gap-1">
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/rooms/${room.id}`}>
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
