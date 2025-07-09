import { Link } from 'react-router-dom';

export function CreateRoom() {
  return (
    <div>
      <h1>Create Room</h1>
      <Link className="underline" to="/rooms/12345">
        Acessar Sala 12345
      </Link>
    </div>
  );
}
