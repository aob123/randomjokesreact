import Logo from "../images/PNG/haha-text-white-border.png"

function Header() {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="" />
        <h1>Random jokes</h1>
      </div>
    </header> 
  );
}

export default Header;
