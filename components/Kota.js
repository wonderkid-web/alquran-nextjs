import Link from "next/link";
import styles from "../styles/Jadwal.module.css";

export default function Kota({ jadwal, kota }) {
  const limaWaktu = jadwal.jadwal.data;
  const kotaTerpilih = kota.kota[0]["nama"];

  let waktu = [];
  for (let time in limaWaktu) {
    waktu.push({
      waktu: time,
      jam: limaWaktu[time],
    });
  }
  return (
    <>
      <h1 className={styles.jadwalh1}>JADWAL SHOLAT DI {kotaTerpilih}</h1>
      <div className={styles.jadwalContainer}>
        {waktu.map((item, index) => (
          <div key={index} className={styles.jadwalBox}>
            <p>
              {item.waktu} : {item.jam}
            </p>
          </div>
        ))}
      <Link className={styles.backLink} href="/jadwal">Kembali ke pencarian kota..</Link>
      </div>
    </>
  );
}

