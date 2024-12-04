// src/reportWebVitals.js

// This function will log or send the web vitals (e.g., CLS, FID, LCP) to a given callback function
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
      // Call the web vitals functions and pass the onPerfEntry callback to handle the results
      getCLS(onPerfEntry);  // Cumulative Layout Shift (CLS)
      getFID(onPerfEntry);  // First Input Delay (FID)
      getLCP(onPerfEntry);  // Largest Contentful Paint (LCP)
    });
  }
};

export default reportWebVitals;
