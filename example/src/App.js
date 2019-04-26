import React, { Fragment, Component } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import Button from "./components/button.component";
import ButtonPrimary from "./components/buttonPrimary.component";
import ButtonSecondary from "./components/buttonSecondary.component";
import ButtonOutline from "./components/buttonOutline.component";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.app}>
          <header className={styles.header}>
            <Logo className={styles.logo} />
            <h1>Charla de css modules</h1>
          </header>
          <main>
            <h2>Botón default</h2>
            <Button className={styles.button}>Soy un botón</Button>
            <h2>Botón primario</h2>
            <ButtonPrimary className={styles.button}>
              Soy un botón primario
            </ButtonPrimary>
            <h2>Botón secundario</h2>
            <ButtonSecondary className={styles.button}>
              Soy un botón secundario
            </ButtonSecondary>
            <h2>Botón outline</h2>
            <ButtonOutline className={styles.button}>
              Soy un botón outline
            </ButtonOutline>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
