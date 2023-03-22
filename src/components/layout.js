import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";
import logo from "../assets/logo.png"

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.header}>
        <div style={{ display: `flex`, alignItems: `center` }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: `50px`, marginRight: `1rem` }} />
          </Link>
        </div>
        <div style={{ display: `flex`, alignItems: `center` }}>
          <Link to="/#caracteristicas" style={{ marginRight: `1rem` }}>Características</Link>
          <Link to="/#beneficios" style={{ marginRight: `1rem` }}>Benefícios</Link>
          <Link to="/#testemunhos" style={{ marginRight: `1rem` }}>Testemunhos</Link>
          <Link to="/#contatos" style={{ marginRight: `1rem` }}>Contatos</Link>
        </div>
    
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <a href="https://gatsbyjs.com">Built with Gatsby</a>
        <a href="https://github.com/gatsbyjs/gatsby-starter-landing-page">
          View Source on GitHub
        </a>
        <Link to="/demo">Demo</Link>
      </footer>
    </div>
  );
}
