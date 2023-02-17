import React from "react";
import Layout from "../../components/Layout";

const App = () => {
  return (
    <Layout>
      <div className="w-full h-screen pt-24 p-8">
        <img src="/icons/icon-192x192.png" alt="Logo" className="mb-4 mx-auto" />
        <h1 className="text-bold text-2xl mb-4">Sesion iniciada</h1>
        <p className="mb-4">
          Usamos <b>firebase</b> como base de datos
        </p>
        <p className="mb-4">
          Bienvenido a la aplicación, dejaremos un texto de muestra para que
          puedas probar el scroll
        </p>
        <p className="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eum
          deleniti obcaecati sint ad vitae blanditiis fugit voluptatum
          accusantium aut eius quisquam provident hic nobis similique dolorem
          deserunt saepe ut.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          reiciendis voluptatibus quae mollitia aliquid sed deleniti, error
          omnis impedit commodi adipisci laudantium illo quam illum. Doloremque
          enim natus quia totam?
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quia aliquid itaque blanditiis vero eius obcaecati, facere
          consequatur, adipisci sunt magni. Placeat, nobis!
        </p>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio vitae
          molestias tempore accusantium eveniet reprehenderit. Enim quo beatae
          explicabo laboriosam quod accusamus architecto necessitatibus
          assumenda, sapiente debitis perferendis, officiis commodi at
          consectetur id obcaecati suscipit ad voluptas asperiores? Harum
          possimus voluptatem voluptate minus! Ut labore neque delectus facilis
          itaque cumque.
        </p>
      </div>
    </Layout>
  );
};

export default App;
