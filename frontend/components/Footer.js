export default function Footer() {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">Donate crypto</p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/create" className="nav-link px-2 text-body-secondary">New campaign</a>
                </li>
                <li className="nav-item">
                    <a href="/donate" className="nav-link px-2 text-body-secondary">Donate</a>
                </li>
            </ul>
        </footer>
    )
}