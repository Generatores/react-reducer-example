import "./Nav.css";

import NavBtn from "../components/NavBtn";

export default function Nav() {
  return (
    <div className="Nav">
      <NavBtn button_text="Home" button_path="/" />
    </div>
  );
}
