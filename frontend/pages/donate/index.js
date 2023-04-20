import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";
import SideBanner from "../../components/SideBanner";
import Header from "../../components/Header";

export default function Donate() {
  return (
    <div className="container px-4 py-5">
      <Header/>
      <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
        <SideBanner
          url={
            "https://t3.ftcdn.net/jpg/04/07/88/00/360_F_407880054_fdbzTfwmIBaDmb84pg4hDJ3rb1ezRpZw.jpg"
          }
        />
        <div className="col-lg-6 ">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Donate your criptos
          </h1>
          <p className="lead">Choose the campaign to donate</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
