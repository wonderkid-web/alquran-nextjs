import { useRouter } from 'next/router';
import styles from '../styles/Quran.module.css'

export default function ({surah}) {
  
    const router = useRouter()

    const handleClick = (id) =>{
        router.push(`/quran/surah/${id}`)
    }

    return (
    <div onClick={()=>handleClick(surah.nomor)} className={styles.surah}>
      <h1 className={styles.nomorSurah}>{surah.nomor}</h1>
      <div className={styles.surahSection}>
        <h2>{surah.nama}</h2>
        <div className={styles.infoSurah}>
          <p>{surah.nama_latin}</p>
          <p>| Jumlah Surah: {surah.jumlah_ayat}</p>
        </div>
      </div>
    </div>
  );
}
