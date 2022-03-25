function property({data}) {

  return (
    <div>
      <h2>Hello</h2>
      <div>
        <h2>{data.results[0].title}</h2>
        {/* <h2>{data.results[0]}</h2> */}
        {
          console.log(data.results[0])
        }
      </div>
    </div>
  )
}

export default property

export async function getServerSideProps({ params: { id } }) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/properties/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}