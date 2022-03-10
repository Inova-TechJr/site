import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href='#' className={styles.headerLogo}>INOVA <span>TECH</span></a>

        <nav className={styles.headerNavbar}>
          <ul>
            <li><a href="#"> Início </a></li>
            <li><a href="#"> Sobre </a></li>
            <li><a href="#"> Serviços </a></li>
            <li><a href="#"> Processo Seletivo </a></li>
            <li><a href="#"> Contato </a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}