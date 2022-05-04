import Head from "next/head";
import PropertyCard from "../components/PropertyCard";
import RecentPosts from "../components/RecentPosts";
import Link from "next/link";
import HeaderSearch from "../components/HeaderSearch";
import PropertyCardSingle from "../components/PropertyCardSingle";

function index({ data }) {

  return (
    <>
    <Head>
          <title>Bariwala - Find Perfect Home</title>
    </Head>
    <div className="">
      {/* Home Page Title Section */}

      <div className="mt-2 mb-5 d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:"url('/layout_images/header_bg.jpg')", backgroundSize:'cover', height:'500px', backgroundRepeat:'no-repeat', opacity:'1', backgroundAttachment:'fixed'}}>
        <div className="text-center">
          <div className="bg-white p-1 rounded" style={{opacity:'0.5'}}>
            <h1>Let us Guide you
               <span className="fw-bolder"> Home</span>
               </h1>
          </div>
          <div className="bg-white mt-1 rounded" style={{opacity:'0.5'}}>
            <p>Simplifying your home finding and manageing hassles</p>
          </div>
        </div>
        <div className="forms">
          <HeaderSearch/>
        </div>
      </div>

      {/* Property Sections */}
      <div className="properties">
        <h3 className="text-center">Popular Apartments</h3>
        {/* <PropertyCard data={data} /> */}
        <PropertyCardSingle data={data}/>
      </div>
      {/* AddPropertySection */}
      <div className="mb-5 shadow-sm rounded">
        <div className="row">
          <div className="col-md-6" style={{backgroundImage:"url('/layout_images/home_img1.png')",backgroundSize:'cover', height:'400px', backgroundRepeat:'no-repeat'}}>

          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#E6E6E6" }}
          >
            <div className="text-center">
              <h2>SUBMIT AN APARTMENT</h2>
              <p>Add your Apartment details here</p>
              <Link href="/admin/add-apartment">
                <a className="btn btn-info">Submit</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* BlogSection */}
      <div className="blogSection">
        <RecentPosts />
      </div>
    </div>
    </>
  );
}

export default index;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/properties`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
