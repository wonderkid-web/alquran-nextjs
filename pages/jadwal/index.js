import { useRouter } from "next/router"
import { useState } from "react"
import styles from '../../styles/Jadwal.module.css'

const API_KOTA = "https://api.banghasan.com/sholat/format/json/kota"

export default function Index({semuaKota}) {
    const [kota, setKota] = useState('')
    const router = useRouter()

   
    return (
        <>
            <input className={styles.inputJadwal} type='text' placeholder="Masukan kota kamu..." onChange={e=>setKota(e.target.value)} />
            <div className={styles.lokasiContainer}>
                {
                    semuaKota.kota.filter(singleKota=>{
                        if(kota == ""){
                            return singleKota
                        }else if(singleKota.nama.toLowerCase().includes(kota.toLocaleLowerCase())){
                            return singleKota
                        }
                    }).map(singleKota =>(
                        <div className={styles.perkota} key={singleKota.id} onClick={()=> router.push(`/jadwal/${singleKota.id}/`)}>
                            <p>{singleKota.id}</p>
                            <p>{singleKota.nama}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>
        </>
  )
}

export async function getServerSideProps(context){
    const raw = await fetch(API_KOTA)
    const semuaKota = await raw.json()

    return{
        props: {
            semuaKota
        }
    }
}
