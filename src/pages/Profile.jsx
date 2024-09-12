import { Button } from "react-bootstrap";
const email = "nombre@email.com"
const Profile = () => {
  return (
    <div className="profile">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <Button>Cerrar sesión</Button>
    </div>
  );
};

export default Profile;
