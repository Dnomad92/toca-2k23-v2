import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header
        style={{
          background: `#fff`,
          marginBottom: `1.45rem`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
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
      /*<header className={styles.header}>
        <Link to="/">achei vc!!  
          <a href="https://wa.me/5581998373767?text=Oi%2C%20O%20link%20chamou%20minha%20atencao%20e%20eu%20gostaria%20de%20saber%20mais%20sobre%20como%20criar%20uma%20landing%20page%20perfeita">WHATSAPP -></a>
        </Link>
      </header>*/
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
