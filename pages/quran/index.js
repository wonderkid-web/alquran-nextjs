import Surah from "../../components/Surah";
import styles from "../../styles/Quran.module.css";

const API_QURAN = "https://equran.id/api/surat";
export default function Quran({ quran }) {
  return (
    <div className={styles.surahContainer}>
      <h1 className={styles.h1}>Al-Qur`an</h1>
      {quran.map((surah) => {
        return (
            <Surah surah={surah} key={surah.nomor}/>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const raw = await fetch(API_QURAN);
  const quran = await raw.json();

  return {
    props: {
      quran,
    },
  };
}
