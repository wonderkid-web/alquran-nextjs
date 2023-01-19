import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Jadwal.module.css'

export default function Jadwal({semuaKota}) {
  const router = useRouter()
  const [kota, setKota] = useState('')

  return (
    <div>
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
                        <p>KODE KOTA: {singleKota.id}</p>
                        <p>NAMA KOTA: {singleKota.nama}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
