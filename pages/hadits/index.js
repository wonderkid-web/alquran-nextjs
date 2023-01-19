import Kitab from "../../components/Kitab";

export default function Index({ namaImam }) {return <Kitab namaImam={namaImam} />}

export async function getServerSideProps(context) {
  const rawBooks = await fetch("https://api.hadith.gading.dev/books/");
  const dataImam = await rawBooks.json();

  return {
    props: {
      namaImam: dataImam.data,
    },
  };
}
