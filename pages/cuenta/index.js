import React from "react";
import Layout from "../../components/Layout";
import { initializeApp } from 'firebase/app'
import { signOut, getAuth } from 'firebase/auth'
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

const App = () => {
  const router = useRouter()

  function trySignOut() {
    signOut(auth).then(() => {
      router.push('/')
    }).catch((error) => {
      alert('Ocurrió un error')
    })
  }

  return (
    <Layout>
      <div className="w-full h-screen flex items-center justify-center pt-24 p-8">
        <button onClick={trySignOut} className="bg-secondary text-white rounded px-4 py-2">Cerrar sesión</button>
      </div>
    </Layout>
  );
};

export default App;
