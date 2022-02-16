import Nav from "../Header/Nav";
import "./Footer.css";

function Footer(props) {
  return (
    <>
      <footer className="Footer">
        <h3>site_name</h3>
        <Nav nav={props.data.nav}></Nav>
      </footer>
    </>
  );
}
export default Footer;
