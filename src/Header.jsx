import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      {/* <a href="/">Check Out Products</a> | <a href="/createNew_product">Post New Stuff</a> */}
      {/* <a href="/login">Login</a> | <a href="/signup">Not member? Sign-Up Here</a> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Memorabillia Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Return to Main Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">User Cart Goes Here</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SignIn/SignUp
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><a className="dropdown-item" href="/signup">SignUp</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="dropdown-item" > {<LogoutLink />} </li>
                  {/* <li><a className="dropdown-item" >{<LogoutLink />}</a></li> */}
                  {/* React does not like having <a></a> tags as children of other <a> tags, be careful when importing */}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
