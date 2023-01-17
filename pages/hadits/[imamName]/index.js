import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../../styles/Hadits.module.css'

export default function imamName({imamName, kitab}) {
    const [spesifik, setSpesifik] = useState(1)
    const router = useRouter()

    return (
    <div>
        <h1 className={styles.haditsh1}>
            Kitab {imamName}
        </h1>
        <div className={styles.haditsSearchContainer}>
            <input min={1} max={5000} onChange={e=>setSpesifik(e.target.value)} className={`${styles.input} ${styles.inputSpesific}`} type="number" placeholder="Cari Spesifik Hadits.." />
            <button onClick={()=>router.push(`/hadits/${imamName}/${spesifik}`)} className={styles.spesificButton}> Cari </button>
            <input min={1} max={100} className={`${styles.input} ${styles.inpuRange1}`} type="number" placeholder="Cari dari.." />
            <input min={2} max={100} className={`${styles.input} ${styles.inpuRange2}`} type="number" placeholder="Ke.." />
            <button className={styles.rangeButton}> Cari </button>
        </div>
        <div className={styles.haditsContainer}>
            {spesifik}
            {
                kitab.data.hadiths.map((hadits)=>(
                    <div className={styles.haditsCard} key={hadits.number}>
                        <p className={styles.terjemahanText}><b>Arabic </b></p> 
                        <p className={styles.haditsArabic}>{hadits.arab}</p>
                        <p className={styles.terjemahanText}><b>Terjemahan </b></p> 
                        <p className={styles.haditsTranslate}><b>{hadits.number}.</b> {hadits.id}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
    const { imamName } = context.params

    const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}?range=1-10`)
    const kitab = await raw.json()

    return{
        props:{
            imamName,
            kitab
        }
    }
}