import React, { useEffect, useState } from "react";

export default function ArrayView(props) {
  const [displayArray, setDisplayArray] = useState([]);

  useEffect(() => {
    {
      props.barArray.length > 0 &&
        setDisplayArray(
          props.barArray.map((ele, index) => (
            <div
              key={index}
              style={{
                height: ele * 7,
                backgroundColor: "#081172",
                width: 10,
                display: "inline-block",
                margin: "0 1px",
                whiteSpace: "nowrap",
              }}
            >
              &nbsp;
            </div>
          ))
        );
    }
  }, [props.barArray]);

  return <div>{displayArray}</div>;
}
