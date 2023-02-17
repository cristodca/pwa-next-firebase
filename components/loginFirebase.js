import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

createUserWithEmailAndPassword(auth, "cristodca.studio@gmail.com", "tAM132ps")
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("usuario: ", user);
  })
  .catch((error) => {
    console.log(error);
  });
