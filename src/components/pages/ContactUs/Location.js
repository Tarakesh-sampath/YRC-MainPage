import React from 'react'

function Location() {
  return (
    <>
      <section className= "our-location">
            <h2>Our Location</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Velammal+New-Gen+Park,Ambattur+Red-hills+Road,Surapet+Main+Rd,Surappattu,Chennai,Tamil+Nadu+600066&output=embed"
                className="google-map"
                width="100%"
                height="350"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </section>
    </>
  )
}

export default Location
