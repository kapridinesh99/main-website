import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function FuturePlans() {
  return (
    <>
      <Header />
      <main>
        <div className="h-96 flex flex-col align-center justify-center">
          <span className="font-bold">COMING SOON...</span>
          <h1>Future Plans</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FuturePlans;
