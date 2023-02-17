import Link from "next/link";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

const firebaseConfig = {
  apiKey: "AIzaSyAc1XOoGY-kiAUKqrXg9PdCXsQ5fbXAwMM",
  authDomain: "global-mobile-aaf09.firebaseapp.com",
  projectId: "global-mobile-aaf09",
  storageBucket: "global-mobile-aaf09.appspot.com",
  messagingSenderId: "567158235857",
  appId: "1:567158235857:web:06947acf238ff518de9bf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const Login = () => {
  const router = useRouter()
  const [session, setSession] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function tryRegister() {

    console.log('intento de registro')
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      if (user) {
        console.log(user)
        router.push('/app')
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

  function verifySession() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/app')
      } else {
        
      }
    })
  }

  useEffect(() => {
    verifySession()
    return () => {};
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center p-8">
      <div className="w-full">
        <div className="w-1/2 mx-auto">
          <img src="/LOGO.png" alt="Logotipo" />
        </div>
        <h2 className="mb-6 font-semibold text-secondary text-xl">
          Registrarse
        </h2>
        <div className="mb-4">
          <label htmlFor="code">Código:</label> <br />
          <input
            className="border rounded w-full px-4 py-2"
            type="number"
            name="code"
            id="code"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Usuario:</label> <br />
          <input
            className="border rounded w-full px-4 py-2"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pass">Contraseña:</label> <br />
          <input
            className="border rounded w-full px-4 py-2"
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 mt-12">
        <Link className="w-full text-secondary px-4 py-2" href={"/"}>
            Iniciar sesión
          </Link>
          <button onClick={() => tryRegister()} className="w-full bg-primary text-black rounded px-4 py-2">
            Registarme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
