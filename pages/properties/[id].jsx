import Head from "next/head"
import Link from "next/link"
import PropertyDesc from "../../components/PropertyDesc"

function property({data}) {

  console.log(data.results)
  if (data.results.length > 0) {
    return (
      <div>
        <Head>
          <title>{data.results[0].title} | Bariwala</title>
        </Head>
        <PropertyDesc data={data}/>
      </div>
    )
  }
  else{
    return(
      <div className="noProperty">
        <img src="https://avhmultiservices.com/public/assets/front/images/no-prop.png" alt="No Property Available" className=""/>
      </div>
    )
  }
  
}

export default property

export async function getServerSideProps({ params: { id } }) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/properties/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}