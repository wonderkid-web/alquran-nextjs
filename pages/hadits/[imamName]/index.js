import { useRouter as useRouterNext } from 'next/router'
import { useState } from 'react'
import styles from '../../../styles/Hadits.module.css'

let inputRange1, inputRange2;

export default function ImamName({imamName, kitab}) {
    const [spesifik, setSpesifik] = useState(1)
    const [range1, setRange1] = useState(1)
    const [range2, setRange2] = useState(1)
    const router = useRouterNext()

    inputRange1 = range1
    inputRange2 = range2

    return (
    <div>
        <h1 className={styles.haditsh1}>
            Kitab {imamName}
        </h1>
        <div className={styles.haditsSearchContainer}>
            <input min={1} max={5000} onChange={e=>setSpesifik(e.target.value)} className={`${styles.input} ${styles.inputSpesific}`} type="number" placeholder="Cari Spesifik Hadits.." />
            <button onClick={()=>router.push(`/hadits/${imamName}/${spesifik}`)} className={styles.spesificButton}> Cari </button>
            <input min={1} max={parseInt(kitab.data.available - 2)} onChange={e=>{setRange1(e.target.value)}} className={`${styles.input} ${styles.inpuRange1}`} type="number" placeholder="Cari dari.." />
            <input min={2} max={4305} onChange={e=>{setRange2(e.target.value)}} className={`${styles.input} ${styles.inpuRange2}`} type="number" placeholder="Ke.." />
            <button onClick={()=>router.push(`/hadits/${imamName}?range=${range1}-${range2}`)} className={styles.rangeButton}> Cari </button>
        </div>
        <div className={styles.haditsContainer}>
            {
                kitab.data.hadiths.map((hadits)=>(
                    <div className={styles.haditsCard} key={hadits.number}>
                        <p className={styles.terjemahanText}><b>Arabic </b></p> 
                        <p className={styles.haditsArabic}>{hadits.arab}</p>
                        <p className={styles.terjemahanText}><b>Terjemahan </b></p> 
                        <p className={styles.haditsTranslate}>{hadits.id}</p>
                    </div>
                ))
                
            }
        </div>
    </div>
  )
}
// ?range=${range1}-${range2}
export async function getServerSideProps(context){
    const { range } = context.query
    const { imamName } = context.params
    let kitab;

    
   
    if('range' in context.query){
        let range1 = parseInt(range.split('-')[0])-1
        let range2 = parseInt(range.split('-')[1])

        const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}?range=${range1}-${range2}`)
        kitab = await raw.json()
    }else{
        const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}?range=1-10`)
        kitab = await raw.json()
    }

    return{
        props:{
            imamName,
            kitab
        }
    }
}