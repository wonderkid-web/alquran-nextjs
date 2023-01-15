import styles from '../../styles/Jadwal.module.css'

export default function kodeKota({jadwal, kota}) {
    
    const limaWaktu = jadwal.jadwal.data
    const kotaTerpilih = kota.kota[0]["nama"]
    
    let waktu = []
    for(let time in limaWaktu){
        waktu.push({
            waktu: time,
            jam: limaWaktu[time]            
        })
    }
    return(
        <>
            <h1 className={styles.jadwalh1}>JADWAL SHOLAT DI {kotaTerpilih}</h1>
            <div className={styles.jadwalContainer}>
                {
                    waktu.map((item, index)=>(
                        <div key={index} className={styles.jadwalBox}>
                            <p>{item.waktu} : {item.jam}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export async function getServerSideProps(context){
    const kode = context.params.kodeKota
    const rawKota = await fetch(`https://api.banghasan.com/sholat/format/json/kota/kode/${kode}`)
    const kota = await rawKota.json()
    const raw = await fetch(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${kode}/tanggal/2023-01-15`)
    const jadwal = await raw.json()
    return{
        props: {
            jadwal, kota
        }
    }
}
