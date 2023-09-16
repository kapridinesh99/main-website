import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PlansTable from "../Components/CompanyPlans/PlansTable";
import PlansPDF from '../Assets/plans-final.pdf';
import "../App.css";

const DownloadPDF = () => {
  return (
    <button className='download-pdf'>
      <a href={PlansPDF} alt='plans-pdf' download="MyExampleDoc">
        Download
      </a>
    </button>
  )
}

function CompanyPlans() {
  return (
    <>
      <Header />
      <main className="company-plans">
        <article className='company-plans-header flex space-between'>
          <h1>Our Plans</h1>
          <DownloadPDF />
        </article>
        <br /> 
        <PlansTable />
        <br /> <br />
      </main>
      <Footer />
    </>
  );
}

export default CompanyPlans;
