import styles from "./App.module.css";

import fotoPerfil from "/foto1.png";

import logo from "/LOGO.png";

function App() {
  const abrir = () => {
    window.open("https://findect.org.br/dia-internacional-direitos-humanos/", "_blank");
  }

  return (
    <>
      <nav className={styles.menu}>
        <div>
          <img width={70} src={logo} alt="" />
        </div>
        <div>
          <a href="#s1">Home</a>
          <a href="#s2">Sobre</a>
        </div>
      </nav>
      <main>
        <section className={styles.s1} id="s1">
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="" onClick={abrir}/>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Direitos Humanos</h2>
            <p className={styles.paragraph}>
              {" "}
              Os Direitos Humanos são um conjunto de normas que reconhecem e
              protegem a dignidade de todos os seres humanos. Eles pertencem a
              todas as pessoas, simplesmente pelo fato de serem humanas, e são
              universais, inalienáveis, indivisíveis e interdependentes.
            </p>
          </div>
        </section>

        <section id="s2" className={styles.s2}>
          <iframe
            className={styles.largura}
            src="https://www.youtube.com/embed/hGKAaVoDlSs?si=_XY25TcFb76fnjqr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className={styles.second}>
            <h2> A importância dos direitos humanos.</h2>
            <p>
              Os direitos humanos visam garantir a dignidade e a integridade da pessoa, especialmente frente ao Estado e suas estruturas de poder, e a cidadania assegura o equilíbrio entre os direitos e deveres do indivíduo em relação à sociedade e da sociedade em relação ao indivíduo.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
