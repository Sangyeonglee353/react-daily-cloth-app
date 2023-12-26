import React, { useEffect, useState } from "react";

export const getImages = (path) => {
  //   const [imageList, setImageList] = useState([]);

  let imageList = [];
  //   useEffect(() => {
  //     const importAll = (r) =>
  //       r.keys().map((file) => ({
  //         src: file.replace("./", ""),
  //         name: file.replace("./", ""),
  //       }));

  //     const images = importAll(
  //       require.context(path, false, /\.(png|jpe?g|svg)$/)
  //     );

  //     setImageList(images);
  //   }, []);
  const importAll = (r) =>
    r.keys().map((file) => ({
      src: file.replace("./", ""),
      name: file.replace("./", ""),
    }));

  //   console.log("path: ", path);

  //   imageList = importAll(require.context(path, false, /\.(png|jpe?g|svg)$/));
  imageList = importAll(
    require.context("../assets/images/closet/top", false, /\.(png|jpe?g|svg)$/)
  );

  return imageList;
};
