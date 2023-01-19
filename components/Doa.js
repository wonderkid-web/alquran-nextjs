import styles from '../styles/Doa.module.css'

export default function Doa({doas}) {
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
                        <i><p className={styles.doaLatin}>{doa.latin}</p></i>
                        <hr />
                        <p className={styles.doaArti}>{doa.artinya}</p>
                    </div>
                ))    
            }
        </div>
        
    ) 
        
}