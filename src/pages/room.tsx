import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return <Navigate replace to="/" />; // Redirect to home if roomId is not provided
  }

  return <div>Room Details {JSON.stringify(params)}</div>;
}
