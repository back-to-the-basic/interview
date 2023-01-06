import React from "react"

const Image = ({ src, size }) => {
  return (
    <>
      <img
        src={src}
        width={size}
        height={size}
        style={{
          display: "block",
          margin: "auto",
        }}
      />
      <br />
    </>
  )
}

export default Image
