import Head from "next/head";
import PropertyCard from "../components/PropertyCard";
import RecentPosts from "../components/RecentPosts";
import Link from "next/link";

function index({ data }) {
  // if (data.length > 0) {
  //   return (
  //     <>
  //       <Head>
  //         <title>Bariwala - Find Perfect Home</title>
  //       </Head>
  //       <div className="row p-5">
  //         {
  //           data.map((value, key) => {
  //             return (
  //               <div key={key} className="card m-2" style={{ width: "18rem" }}>
  //                 <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
  //                 <div className="card-body">
  //                   <h5 className="card-title">{value.ap_name}</h5>
  //                   <p className="card-text">{value.description.length > 80 ? value.description.substring(0, 80) + "..." : value.description}</p>
  //                   <div className="row">
  //                     <div className="col text-center">
  //                       <p>
  //                         Price: {value.rent_per_month}
  //                       </p>
  //                     </div>
  //                     <div className="col text-center">
  //                       <p>
  //                         Type: {value.type}
  //                       </p>
  //                     </div>
  //                     <div className="col text-center">
  //                       <p>
  //                         Available From: {value.from_month}
  //                       </p>
  //                     </div>
  //                   </div>
  //                   <div className="text-center">
  //                     <a href={`/properties/${value.apartment_id}`} className="btn btn-primary">View Details</a>
  //                   </div>
  //                 </div>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     </>
  //   )
  // }

  // else{
  //   return(
  //     <>

  //       <Head>
  //         <title>Bariwala - Find Perfect Home</title>
  //       </Head>
  //       <div className="row p-5">
  //           <div className="card m-2" style={{ width: "18rem" }}>
  //             <img src="https://www.indopropertyworld.com/Property/GetPropertyImage?imgPath=%2FAreas%2FMicro%2FTemplate%2FRadhe%20Ratnam%2Fgallery.jpg" className="card-img-top" alt="..." />
  //             <div className="card-body">
  //               <h5 className="card-title">No Property Found!</h5>
  //               <p className="card-text">This is Demo Property</p>
  //               <div className="row">
  //                 <div className="col text-center">
  //                   <p>
  //                     Price: 0
  //                   </p>
  //                 </div>
  //                 <div className="col text-center">
  //                   <p>
  //                     Type: Demo
  //                   </p>
  //                 </div>
  //                 <div className="col text-center">
  //                   <p>
  //                     Available From: 00/00/0000
  //                   </p>
  //                 </div>
  //               </div>
  //               <div className="text-center">
  //                 <a href="#" className="btn btn-primary">No Details Available</a>
  //               </div>
  //             </div>
  //           </div>
  //       </div>

  //     </>
  //   )
  // }

  return (
    <div className="container-fluid">
      {/* Home Page Title Section */}

      <div className="mt-5 mb-5" p-5 style={{backgroundImage:"url('/layout_images/header_bg.png')"}}>
        <div className="text-center">
          <h1>Let us Guide you Home</h1>
          <p>Simplifying your home finding and manageing hassles</p>
        </div>
        {/* <img src="/layout_images/header_bg.png" className="bg-img" alt="bg img" /> */}
      </div>

      {/* Property Sections */}
      <div className="properties">
        <h3 className="text-center">Popular Apartments</h3>
        <PropertyCard data={data} />
      </div>
      {/* AddPropertySection */}
      <div className="mb-5 shadow-sm rounded">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/layout_images/home_img1.png"
              alt="Layout Img"
              style={{ height: "400px" }}
            />
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
