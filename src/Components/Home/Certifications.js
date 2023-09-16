import React from "react";
import "./Home.css";

function Certifications() {
  return (
    <section className="all-certificates flex space-around gap-2xl">
      <div
        className={`flex gap-l align-center hover:bg-yellow-100 cursor-pointer certificate`}>
        <img width={50} src="/resourceDownload.svg" alt="resource downloads" />
        <span>Resource Downloads</span>
      </div>
      <div
        className={`flex gap-l align-center hover:bg-yellow-100 cursor-pointer certificate`}>
        <img width={50} src="/isoCertified.svg" alt="iso Certified" />
        <span>ISO Certified</span>
      </div>
      <div
        className={`flex gap-l align-center hover:bg-yellow-100 cursor-pointer certificate`}>
        <img width={50} src="/feedback.svg" alt="feedback" />
        <span>Feedback/ Complaints</span>
      </div>
    </section>
  );
}

export default Certifications;
