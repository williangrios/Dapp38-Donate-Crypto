import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import { useState } from "react";
import SideBanner from "../components/SideBanner";
import Header from "../components/Header";
import { useConnect } from "../hooks/useConnect";

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  function btnLoginClick() {
    console.log("ent");
    const resp = useConnect();
    console.log("sai");
    resp
      .then((account) => setWallet(account))
      .catch((error) => setError(error));
  }

  return (
    <div className="container px-4 py-5">
      <Header account={wallet} />
      <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
        <SideBanner
          url={
            "https://i0.wp.com/cdn-images-1.medium.com/max/1024/1*FRoQ0Q553lRXfO6R62Ctbg.jpeg?w=750&ssl=1"
          }
        />
        <div className="col-lg-6 ">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Donate crypto
          </h1>
          <p className="lead">Platform to donate</p>
          {!wallet ? (
            <div>
              <p className="lead mb-3">
                Connect, create your campaign or donate cryptos
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  onClick={btnLoginClick}
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Conect
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="lead">
                You are connected, go to the New campaign page or Donate page{" "}
              </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
