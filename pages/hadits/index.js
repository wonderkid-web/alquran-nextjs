import { useRouter } from "next/router";
import styles from "../../styles/Hadits.module.css";
export default function Index({ namaImam }) {

    const router = useRouter()

    return (    
    <>
      <h1 className={styles.haditsh1}>8 Kitab hadits</h1>
      <div className={styles.kitabContainer}>
        {
        namaImam.filter(data=>data.name !== "HR. Ahmad").map((data) => (
          <div key={data.available} className={styles.kitabCard} onClick={()=> router.push(`/hadits/${data.id}`)}>
            <h3>{data.name}</h3>
            <p>Tersedia: {data.available}</p>
          </div>
        ))
        }
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const rawBooks = await fetch("https://api.hadith.gading.dev/books/");
  const dataImam = await rawBooks.json();

  return {
    props: {
      namaImam: dataImam.data,
    },
  };
}
