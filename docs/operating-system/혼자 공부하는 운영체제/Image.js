export const Image = ({ src, size }) => {
  <img
    src={src}
    style={{
      display: "block",
      margin: "auto",
      width: { size },
      height: { size },
    }}
  />;
};
