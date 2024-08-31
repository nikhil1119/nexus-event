import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="content">
          <div
            className="textt"
            style={{ 
              color: "black",
              // marginBottom: "1px",
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 60,

              backgroundColor: "#ffd9cc10", // Background color
              padding: "10px", // Optional padding for better visual appeal
              borderRadius: "0px" // Optional: Rounded corners
              }}
          >
            NEXUS EVENTS
          </div>
          <div style={{
  backgroundColor: "#f8f9fa80",  // Light grey background color
  color: "black",
             // Dark grey text color
  padding: "20px",             // Space inside the div
  margin: "20px", 
  marginLeft: "100px",   
  marginRight: "100px",          // Space outside the div
  borderRadius: "8px",         // Rounded corners
  border: "1px solid #dee2e6", // Light border
  fontSize: "20px",            // Font size
  lineHeight: "1.6",           // Line height for readability
  textAlign: "center",         // Center-align the text
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
}}>
          Whatever your interest, there are thousands of people who share it on NEXUS EVENTS. Events are happening every day— click the button below to join the fun.
          </div>
        </div>
        <Link
          className="main-button"
          style={{
            fontSize: 15,
            
            color: "white",
            borderRadius: 25,
            width: "200px",
            height: "45px",
            justifyContent: "center",
            

            


             // Correct font family syntax
    fontWeight: 600, // Use camelCase for fontWeight
    fontStyle: "normal", // Correct font style syntax and value should be quoted
    display: "flex", // Add this if you want to use flexbox
    alignItems: "center", // Use camelCase for alignItems
          }}
          sx={{
            ":hover": {
              bgcolor: "white",
              color: "black",
            },
          }}
          to="/allEvents"
        >
          View All Events
        </Link>
      </div>

      <div>
        <div className="content-box1">
          <div
            style={{
              
              
              marginTop: "25px",
              marginBottom: "25px",
              fontWeight: 700,
              fontSize: "x-large",
              fontSize: "34px",
              color: "white",
              textShadow: 
                "1px 1px 0 black, " + 
                "-1px -1px 0 black, " +  
                "1px -1px 0 black, " +  
                "-1px 1px 0 black",
              
              borderRadius: "40px",
              // backgroundColor: "#0000002f",
            }}
          >
            Participate in an Event
          </div>
          <Link
            className="second-button"
            style={{
              color: "white",          // Text color in default state
              backgroundColor: "black", // Button background color in default state
              borderRadius: "25px",    // Rounded corners
              width: "200px",          // Button width
              height: "50px",          // Button height
             
              
              alignItems: "center",    // Center content vertically
              textDecoration: "none",  // Remove underline from text
            }}
            sx={{
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            to="/allEvents"
          >
            All Events
          </Link>
        </div>
        <div className="content-box2">
        <div
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          fontWeight: 700,
          fontSize: "x-large",
          fontSize: "34px",
          color: "white",
          textShadow: 
            "1px 1px 0 black, " + 
            "-1px -1px 0 black, " +  
            "1px -1px 0 black, " +  
            "-1px 1px 0 black",
          
          borderRadius: "40px",
          // backgroundColor: "#0000002f",
        }}
  
>
  Host an Event
</div>

          <Link
            className="second-button"
            style={{
              
            color: "white",          // Text color in default state
            backgroundColor: "black", // Button background color in default state
            borderRadius: "10px",    // Rounded corners
            width: "200px",          // Button width
            height: "50px",          // Button height
            
            alignItems: "center",    // Center content vertically
            textDecoration: "none",  // Remove underline from text
     
            }}
            sx={{
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            to="/signup"
          >
            Sign Up   
          </Link>
        </div>
      </div>
    </div>
  );
};
