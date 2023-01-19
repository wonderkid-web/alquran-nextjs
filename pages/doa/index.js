import Doa from '../../components/Doa'
const API_DOA = "https://doa-doa-api-ahmadramadhan.fly.dev/api"
export default function Index({doas}) {
    let rawDoa = []
    for(const key in doas){
        rawDoa.push(doas[key])
    }
    
    return <Doa doas={doas} />
        
}

export async function getServerSideProps(){

    const raw = await fetch(API_DOA)
    const doas = await raw.json()

    return{
        props: {
            doas
        }
    }
}
