import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBanner from "../../components/SideBanner";

export default function Create(){
    return (
        <div className="container px-4 py-5">
          <Header/>
          <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
            <SideBanner
              url={
                "https://createkids.ca/wp-content/uploads/2020/01/Create-Logo-Straightened.png"
              }
            />
            <div className="col-lg-6 ">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Create a new campaign
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
    