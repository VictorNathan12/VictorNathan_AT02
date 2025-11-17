import styles from './App.module.css'

import fotoPerfil from '/foto1.png'

import logo from '/LOGO.png'


function App() {
  

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
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Direitos Humanos</h2>
            <p className={styles.paragraph}> São as garantias fundamentais para que todo ser humano possa viver com dignidade. Eles são inerentes a todas as pessoas, independentemente de raça, sexo, nacionalidade, etnia, religião ou qualquer outra condição.</p>
          </div>
        </section>
        
        <section id="s2">
            <h2>Sobre</h2>
            <div class="wrap-cards">
                <div class="card">
                    <img src="./Images/" alt="Arthur Morgan"/>
                    <h3>Arthur Morgan</h3>
                    <p>Um membro da gangue Van der Linde, Arthur deve lidar com o declínio do Velho Oeste enquanto tenta sobreviver contra as forças do governo</p>
                </div>
            </div>
       </section>

      </main>
    </>
  )
}

export default App