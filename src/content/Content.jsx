
// <div>
//   <div>
//      <p>Kalyan Jewellers located in Vijayawada has impressive collections of Diamond Jewellery. Everyone can wear a diamond at
//        an affordable price range. Kalyan design catalogue helps customers to choose their favourite diamond jewellery online.</p>
//        <p>Today gold rate in Vijayawada kalyan jewellers</p>
//        <div>PRODUCTS AVAILABLE</div>
//        <div><span>Antique Jewellery</span> | <span>Gold Jewellery</span> | <span> Precious Stones</span> | 
//        <span>Heritage Jewellery </span> | <span>Dancing Diamonds</span> | <span> Natural Designed Diamonds</span> | 
//        <span> Diamond Jewellery </span> | <span> Uncut Diamonds </span>
//        <div>SERVICES AVAILABLE</div>
//        <div>
//         <span>Gold Exchange</span> | 
//         <span>Jewellery Repair</span> | 
//         <span> Ear Piercing</span> | 
//         <span>Nose Piercing </span> | 
//         <span> Jewellery Resizing</span>
//        </div>
//        <div>OTHER FACILITIES AVAILABLE</div>
//        <div>
//         <span>Ample Car Parking</span> | 
//         <span> Advance Booking Facility</span> | 
//         <span>Credit And Debit Cards Accepted</span> | 
//        </div>
//        <h2>How to get theret</h2>

//     <ul>
//         <li>From Vijayawada Bus Station via NH65 - 2 km</li>
//         <li>From Vijayawada Railway Station via MG Rd/Vijayawada Rd 3 km</li>
//         <li>From Vijayawada International Airport via NH16 - 22 km</li>
//     </ul> 
//        </div>
//        <div></div>
//   </div>
//   <div>
//      <h1>ADDRESS</h1>
     
//   </div>
// </div> */}
//         <div id="carouselExample" className="carousel slide">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="scam-4.webp" className="d-block w-100" alt="img here">
//     </div>
//     <div className="carousel-item">
//       <img src="scam-4.webp" className="d-block w-100" alt="img here">
//     </div>
//     <div className="carousel-item">
//       <img src="scam-4.webp" className="d-block w-100" alt="img here">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// </>

//   )
// }

// export default Content
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'; // Import your custom CSS for styling

function Content() {
  const videoUrl='https://www.youtube.com/watch?v=16DJgFv6WPw&ab_channel=TanishqJewellery';
  return (
    <>
      {/* Your commented-out content */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="scam-4.webp" className="d-block w-100" alt="img here" />
          </div>
          <div className="carousel-item">
            <img src="KJ-Candere-Desktop-Diwali.webp" className="d-block w-100" alt="img here" />
          </div>
          <div className="carousel-item">
            <img src="scam-4.webp" className="d-block w-100" alt="img here" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="curved-vertical-line"></div>
      <div className='MUHURAT'>MUHURAT</div>
      <div className="centered-text">
      <p>
        Weddings are a deep-rooted element of our society, and Indian brides are known as symbols of beauty, pride and elegance.
        India is a vast country with different customs and traditions practiced even within the same state.
        Yet, there is something that unites us all - the "Muhurat" or the auspicious time for celebration.
        At Kalyan Jewellers, we embrace the importance of every "Muhurat". Our wedding collections are for every bride, from every part of India.
      </p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center',width:'800px',marginLeft:'28%' }}>
      <div style={{ margin: '0 auto' }}>
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          style={{ maxWidth: '100%', height: 'auto' }}
        ></iframe>
      </div>
      <div style={{ margin: '0 auto' }}>
        <img
          src="kalyan.png"
          alt="img here"
          style={{ maxWidth: '100%', height: 'auto', marginLeft: '20px' }}
        />
      </div>
    </div>
    </>
  );
}

export default Content;
