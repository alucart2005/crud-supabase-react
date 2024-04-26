import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import { UserAuth } from "../context/AuthCOntext";

export function Home() {
  const { user,signout } = UserAuth();
  return (
    <div className="App">
      <Perfil foto={user.picture} name={user.name} email={user.email} />
      <h1>SUPABASE is COOL</h1>
      <img src={googlelogo} className="logo google" alt="React logo" />
      <div className="card">
        <button on onClick={signout}>Logout</button>
        <p>codewizardai.com</p>
      </div>
      <p className="read-the-docs">
        Supabase implements all the power of PostgreSQL
      </p>
    </div>
  );
}
