import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
  const router = useRouter()
  return (
    <div className={styles.navbar}>
        <button onClick={()=> router.push('/jadwal')}>
          <Image alt='Waktu Sholat' width="30" height={30} src="/../public/clock.png"></Image>
        </button>
        <button alt='Kumpulan Hadits' onClick={()=> router.push('/hadits')}> 
          <Image width="30" height={30} src="/../public/book.png"></Image>
        </button>
        <button alt='Baca Al-Qur`an' onClick={()=> router.push('/quran')}>
          <Image width="30" height={30} src="/../public/quran.png"></Image>
        </button>
        <button alt='Doa sehari-hari' onClick={()=> router.push('/doa')}>
          <Image width="30" height={30} src="/../public/praying.png"></Image>
        </button>
    </div>
  )
}
