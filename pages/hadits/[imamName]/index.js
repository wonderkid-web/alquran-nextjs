import Hadits from "../../../components/Hadits";

export default function ImamName({imamName, kitab}) {


  return <Hadits imamName={imamName} kitab={kitab} />
}
export async function getServerSideProps(context){
    const { range } = context.query
    const { imamName } = context.params
    let kitab;

    
   
    if('range' in context.query){
        let range1 = parseInt(range.split('-')[0])-1
        let range2 = parseInt(range.split('-')[1])

        const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}?range=${range1}-${range2}`)
        kitab = await raw.json()
    }else{
        const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}?range=1-10`)
        kitab = await raw.json()
    }

    return{
        props:{
            imamName,
            kitab
        }
    }
}