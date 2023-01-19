import Kota from "../../components/Kota";

export default function kodeKota({ jadwal, kota }) {

  return <Kota jadwal={jadwal} kota={kota} />
}

export async function getServerSideProps(context) {
  const kode = context.params.kodeKota;
  const rawKota = await fetch(
    `https://api.banghasan.com/sholat/format/json/kota/kode/${kode}`
  );
  const kota = await rawKota.json();
  const date = new Date()
  const bulan = date.getMonth() < 10 ? "0".concat("", date.getMonth()+1) : date.getMonth()
  const hari = date.getDate()
  const raw = await fetch(
    `https://api.banghasan.com/sholat/format/json/jadwal/kota/${kode}/tanggal/2023-${bulan}-${hari}`
  );
  const jadwal = await raw.json();

  return {
    props: {
      jadwal,
      kota,
    },
  };
}
