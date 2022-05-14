import PropertyCard from "../components/PropertyCard";

function find({data}) {
  return (
    <div>
        <h1 className="text-center mt-3">Find An Apartment</h1>
        {/* Property Sections */}
        <div className="properties">
          {/* <h3 className="text-center">Popular Apartments</h3> */}
          <div className="properties d-flex justify-content-center align-items-center">
            <div className="row p-4">
              <PropertyCard data={data} />
            </div>
            {/* <PropertyCardSingle data={data}/> */}
          </div>
        </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/properties`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default find