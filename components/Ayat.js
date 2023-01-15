import styles from "../styles/Quran.module.css";
export default function Ayat({ surah }) {
  return surah.map((ayat) => {
    return (
      <div className={styles.ayat} key={ayat.nomor}>
        <h1 className={styles.nomorAyat}>{ayat.nomor}</h1>
        <div className={styles.ayatSection}>
          <p className={styles.ayatArabic}>{ayat.ar}</p>
          <p className={styles.ayatTranslate}>{ayat.tr}</p>
          <p className={styles.ayatTerjemahan}>{ayat.idn}</p>
        </div>
      </div>
    );
  });
}
