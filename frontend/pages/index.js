import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import { doLogin } from "../services/Web3Service";
import useState from "react"
import SideBanner from "../components/SideBanner";
import Header from "../components/Header";


function btnLoginClick(){
  const [wallet, setWallet] = useState("")
  const [error, setError] = useState("")  
  doLogin()
    .then((walletAddress) => {
      setWallet(walletAddress)
    })
    .catch((error) => {
      setError(error)
    })
}

export default function Home() {
  return (
    <div className="container px-4 py-5">
      <Header />
      <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
        <SideBanner url={"https://i0.wp.com/cdn-images-1.medium.com/max/1024/1*FRoQ0Q553lRXfO6R62Ctbg.jpeg?w=750&ssl=1"}/>
        <div className="col-lg-6 ">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Donate crypto</h1>
          <p className="lead">Platform to donate</p>
          <p className="lead mb-3">Conect, create your campaign or donate cryptos</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button onClick={btnLoginClick} className="btn btn-primary btn-lg px-4 me-md-2">
                Conect
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
