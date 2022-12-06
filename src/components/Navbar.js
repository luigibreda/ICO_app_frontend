import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden sm:inline">
      <Link to="/" className="navbar-title">
        Inicio
      </Link>
      <Link to="/token" className="navbar-title">
        Token WVW
      </Link>
      <Link to="/transaction" className="navbar-title">
        Transações Recentes
      </Link>
      <Link to="/tokenDistribution" className="navbar-title">
        Token Distribuição
      </Link>
      <Link to="/faucet" className="navbar-title">
        Exchange
      </Link>
      <Link to="/faq" className="navbar-title">
        F.A.Q
      </Link>
      <Link to="/contact" className="navbar-title">
        Contato
      </Link>
    </div>
  );
};

export default Navbar;
