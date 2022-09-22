import "../styles/globals.css";
import Script from "next/script";
// import "./Poppins-normal.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="FileSaver.js-master/src/FileSaver.js" />
      <Script src="jsPDF-master/dist/jspdf.debug.js" />

      <Script src="./Poppins-normal.js" type="module" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
