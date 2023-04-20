export default function Header({ account }) {
  return (
    <div>
      <div className="border-bottom align-items-right">
        {!account ? <p>Welcome guest</p> : <p>{`Welcome ${account}`}</p>}
      </div>
    </div>
  );
}
