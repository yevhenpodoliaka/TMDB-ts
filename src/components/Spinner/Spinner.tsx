import React from "react";
import { Blocks } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    

    }}>
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
    
    //   wrapperStyle={{
    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "rgba(0, 0, 0, 0.8)",
    //     zIndex: "999",
    //   }}
    />
    </div>
  );
};

export default Spinner;
