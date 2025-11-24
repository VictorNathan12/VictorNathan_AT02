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
            <h2>Sobre</h2>
            <p>
              Direitos humanos são normas que reconhecem e protegem a dignidade
              de todas as pessoas, garantindo que vivam de forma justa e
              igualitária. Eles são universais, inalienáveis e intrínsecos a
              cada indivíduo pelo simples fato de existir, regendo a relação
              entre as pessoas e o Estado, que tem a obrigação de respeitá-los e
              promovê-los através de leis e tratados. Os direitos humanos
              abrangem áreas como vida, liberdade, igualdade, saúde, educação,
              trabalho e segurança
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
