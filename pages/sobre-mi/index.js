import React from "react";
import Layout from "../../components/Layout";

const App = () => {
  return (
    <Layout>
      <div className="w-full h-screen pt-24 p-8">
        <img src="/me.jpg" alt="Cristopher Chavez" className="mb-4 rounded" />
        <h1 className="text-bold text-2xl mb-4">Cristopher Daniel Chavez Alfaro</h1>
        <h2 className="text-medium text-xl mb-4">19310146</h2>
        <p className="mb-4">
          Soy programador web a tiempo completo además de mis estudios.
        </p>
      </div>
    </Layout>
  );
};

export default App;
