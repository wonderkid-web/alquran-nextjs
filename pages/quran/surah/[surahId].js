import Ayat from "../../../components/Ayat";

const API_QURAN = "https://equran.id/api/surat";

function IndividualSurah({surah}) {
  return (
    <div>
       <Ayat surah={surah.ayat} />
    </div>
  )
}

export async function getServerSideProps(context){
    const nomorSurah = context.params.surahId

    const raw = await fetch(`${API_QURAN}/${nomorSurah}`)
    const surah = await raw.json()

    return{
        props: {
            surah
        }
    }
}

export default IndividualSurah

