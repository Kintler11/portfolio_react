import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { COUNTRIES_DATA } from "./data/countries_data";
import HEX_DATA from "./data/countries_hex_data.json";
import Globe from "react-globe.gl";

const getCountry = () => {
  return COUNTRIES_DATA.filter((country)=>{return country.country == "FI"})[0]
};

const CustomGlobe = ({renderer, rotate}) => {
  const globeEl = useRef();
  const country = getCountry();
  const [selectedCountry, setSelectedCountry] = useState({
    lat: country.latitude,
    lng: country.longitude,
    label: country.name
  });
  const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
  }, [globeEl]);

  useEffect(() => {
    const countryLocation = {
      lat: selectedCountry.lat-30,
      lng: selectedCountry.lng,
      altitude: 1.5
    };

    globeEl.current.pointOfView(countryLocation, 0);
  }, [selectedCountry]);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      globeBackgroundTexture={null}
      showAtmosphere={false}
      enablePointerInteraction={false}
      renderer={renderer}
      onZoom={null}
      onGlobeClick={()=>{}}
      pauseAnimation={true}
      showGlobe={false}
      animateIn={true}
      width="500" 
      height="500"
      enableGlobeGlow={false}
      labelsData={[selectedCountry]}
      labelText={"label"}
      labelSize={4}
      labelColor={useCallback(() => "white", [])}
      labelDotRadius={1}
      labelAltitude={0.05}
      hexPolygonsData={hex.features}
      hexPolygonResolution={2}
      hexPolygonMargin={0.3}
      hexPolygonColor={useCallback(() => "rgb(255, 10, 10)", [])}
    />
  );
}

export default CustomGlobe