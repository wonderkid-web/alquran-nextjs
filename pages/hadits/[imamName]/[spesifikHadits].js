import SingleHadits from '../../../components/SingleHadits'

export default function spesifikHadits({spesifikHadits, imamName, singleHadits}) {
    return <SingleHadits spesifikHadits={spesifikHadits} imamName={imamName} singleHadits={singleHadits} />
}

export async function getServerSideProps(context){
    console.log(context.query)
    const {imamName, spesifikHadits} = context.query

    const raw = await fetch(`https://api.hadith.gading.dev/books/${imamName}/${spesifikHadits}`)
    const singleHadits = await raw.json()

    return{
        props: {
            imamName, spesifikHadits, singleHadits
        }
    }
}
