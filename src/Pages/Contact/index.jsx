import React, { useEffect, useRef } from "react";
import "./../../Assets/CSS/contact.css";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && mapRef.current) {
      // Dark map style JSON
      const darkMapStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ];

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.78517511758828, lng: -122.40699826013112 },
        zoom: 12,
        styles: darkMapStyle,
      });

      const locations = [
        {
          position: { lat: 37.72902861581561, lng: -122.24701270170458 },
          title: "Midtown - Alameda",
          content: `
            <div style="font-size:14px;">
              <strong>Midtown Pharmacy- Alameda</strong><br/>
              2173 Harbor Bay Parkway<br/>
              Alameda, CA 94502<br/>
              <a href="tel:5108644199">(510) 864-4199</a><br/>
              <a href="mailto:hello@scriptsiterx.com">hello@scriptsiterx.com</a>
            </div>
          `,
        },
        {
          position: { lat: 37.78517511758828, lng: -122.40699826013112 },
          title: "ScriptSite - San Francisco",
          content: `
            <div style="font-size:14px;">
              <strong>ScriptSite - San Francisco</strong><br/>
              870 Market St. Ste. 1028<br/>
              San Francisco, CA 94102<br/>
              <a href="tel:8553288734">(855) 328-8734</a><br/>
              <a href="mailto:hello@scriptsiterx.com">hello@scriptsiterx.com</a>
            </div>
          `,
        },
      ];

      const infoWindow = new window.google.maps.InfoWindow();
      const bounds = new window.google.maps.LatLngBounds();

      locations.forEach((loc) => {
        const marker = new window.google.maps.Marker({
          position: loc.position,
          map,
          title: loc.title,
        });

        marker.addListener("click", () => {
          infoWindow.setContent(loc.content);
          infoWindow.open(map, marker);
        });

        // extend bounds for each marker
        bounds.extend(loc.position);
      });

      // 👇 this will auto zoom & center to show both locations
      map.fitBounds(bounds);
    }
  }, []);

  return (
    <>
      <title>Contact | Midtown Pharmacy</title>

      <section className="script-contact-page g-contact-pages">
        <div className="container">
          {/* Left Section */}
          <div className="left-section">
            <h2>Contact us</h2>
            <p>Tell us how we can be of service.</p>
            <ContactForm />
          </div>

          {/* Right Section */}
          <div className="right-section">
            {/* Location details */}
            {/* <a className="map-info" href="#">
              <img
                width="50"
                height="62"
                src={mapLocation}
                alt="map icon"
                className="map1-icon"
              />
              <div className="map-info-box">
                <span>Midtown</span>
                <p className="city">Alameda</p>
                <p className="address">
                  2173 Harbor Bay Parkway
                  <br />
                  Alameda, CA 94502
                </p>
              </div>
            </a>

            <a className="map-info-2" href="#">
              <img
                width="50"
                height="62"
                src={mapLocation}
                alt="map icon"
                className="map2-icon"
              />
              <div className="map-info-box-2">
                <span>ScriptSite</span>
                <p className="city">San Francisco</p>
                <p className="address">
                  870 Market St. Ste. 1028
                  <br />
                  San Francisco, CA 94102
                </p>
              </div>
            </a> */}

            {/* Google Map */}
            <div
              ref={mapRef}
              style={{ width: "100%", height: "750px", borderRadius: "15px" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
