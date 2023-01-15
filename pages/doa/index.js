import Doa from '../../components/Doa'
import styles from '../../styles/Doa.module.css'
const API_DOA = "https://doa-doa-api-ahmadramadhan.fly.dev/api"
export default function Index({doas}) {
    let rawDoa = []
    for(const key in doas){
        rawDoa.push(doas[key])
    }
    
    return(
        <div className={styles.doaContainer}>
            {
                doas.map(doa=>(
                    <div className={styles.doa} key={doa.id}>
                        <h1 className={styles.doah1}>{doa.id}. {doa.doa}</h1>
                        <p className={styles.doaArabic}>{doa.ayat}</p>
                        <p className={styles.doaLatin}>{doa.latin}</p>
                        <p className={styles.doaArti}>{doa.artinya}</p>
                    </div>
                ))    
            }
        </div>
        
    ) 
        
}

export async function getServerSideProps(context){

    const raw = await fetch(API_DOA)
    const doas = await raw.json()

    return{
        props: {
            doas
        }
    }
}
