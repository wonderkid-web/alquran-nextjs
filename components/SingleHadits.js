import styles from '../styles/Hadits.module.css'

export default function SingleHadits({spesifikHadits, imamName, singleHadits}) {
    
    
    return (
    <div className={styles.singleHadits}>
        <div className={styles.topContainer}>
            <p className={styles.singleHaditsImam}>imam: {imamName}</p> 
            <p className={`${styles.singleHaditsNomor}`} >hadits nomor: {spesifikHadits}</p> 
        </div>
        
        <p className={styles.terjemahanText}><b>Arabic </b></p> 
        <p className={styles.singleHaditsArabic}>{singleHadits.data.contents.arab}</p>

        <p className={styles.terjemahanText}><b>Terjemahan </b></p> 
        <p className={styles.singleHaditsTranslate}>{singleHadits.data.contents.id}</p> 

    </div>
  )
}
