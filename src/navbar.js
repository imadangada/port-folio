const Navbar = () => {
    return ( 
        <div>
  <div className="scroll-button">
    <a href="#home"><i className="fas fa-arrow-up"></i></a>
  </div>
  <nav>
    <div className="navbar">
      <div className="logo"><a href="#">ImadDangada</a></div>
      <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="cancel-btn">
            <i className="fas fa-times"></i>
          </div>
      </ul>
      
    </div>
    <div className="menu-btn">
      <i className="fas fa-bars"></i>
    </div>
  </nav>
  </div>
     );
}
 
export default Navbar;