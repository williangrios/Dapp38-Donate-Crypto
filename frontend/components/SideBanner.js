import "bootstrap/dist/css/bootstrap.min.css";

export default function SideBanner({ url }) {
  return (
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={url}
        className="d-block mx-lg-auto img-fluid"
        width="700"
        height="500"
        alt="donate"
      />
    </div>
  );
}
