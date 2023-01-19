import Jadwal from "../../components/Jadwal"

const API_KOTA = "https://api.banghasan.com/sholat/format/json/kota"

export default function Index({semuaKota}) {
    return <Jadwal semuaKota={semuaKota} />
}

export async function getServerSideProps(){
    const raw = await fetch(API_KOTA)
    const semuaKota = await raw.json()

    return{
        props: {
            semuaKota
        }
    }
}
