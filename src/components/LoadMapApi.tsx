interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

export const loadMapApi = () => {
  const MAP_KEY = process.env.REACT_APP_MAP_API_KEY;

  const mapsURL = `https://www.google.com/maps/embed/v1/place?key=${MAP_KEY}&q=Eiffel+Tower,Paris+France`;
  const scripts = document.getElementsByTagName("script");
  // Go through existing script tags, and return google maps api tag when found.
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapsURL) === 0) {
      return scripts[i];
    }
  }
  const googleMapScript = document.createElement("script");
  googleMapScript.src = mapsURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);
  return googleMapScript;
};
