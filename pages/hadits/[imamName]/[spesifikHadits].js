import styles from '../../../styles/Hadits.module.css'

export default function SpesifikHadits({spesifikHadits, imamName, singleHadits}) {
    
    
    return (
    <div className={styles.singleHadits}>
        <p className={styles.singleHaditsImam}>imam: {imamName}</p> 
        <p className={`${styles.singleHaditsNomor}`} >hadits nomor: {spesifikHadits}</p> 
        
        <p className={styles.terjemahanText}><b>Arabic </b></p> 
        <p className={styles.singleHaditsArabic}>{singleHadits.data.contents.arab}</p>

        <p className={styles.terjemahanText}><b>Terjemahan </b></p> 
        <p className={styles.singleHaditsTranslate}>{singleHadits.data.contents.id}</p> 

    </div>
  )
}

export async function getServerSideProps(context){
    const {imamName, spesifikHadits} = context.query

    const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}/${spesifikHadits}`)
    const singleHadits = await raw.json()

    return{
        props: {
            imamName, spesifikHadits, singleHadits
        }
    }
}
