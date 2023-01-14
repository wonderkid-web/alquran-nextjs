import styles from "../styles/Quran.module.css";
export default function Ayat({ surah }) {
  return surah.map((ayat) => {
    return (
      <div className={styles.ayat}>
        <h1 className={styles.nomorAyat}>{ayat.nomor}</h1>
        <div className={styles.ayatSection}>
          <p className={styles.ayatArabic}>{ayat.ar}</p>
          <p>{ayat.tr}</p>
          <p>{ayat.idn}</p>
        </div>
      </div>
    );
  });
}
