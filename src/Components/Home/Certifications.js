import "./Home.css";
import { Link } from 'react-router-dom';

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
      <Link to='/contactus'
        className={`flex gap-l align-center hover:bg-yellow-100 cursor-pointer certificate`}>
        <img width={50} src="/feedback.svg" alt="feedback" />
        <span>Feedback/ Complaints</span>
      </Link>
    </section>
  );
}

export default Certifications;
