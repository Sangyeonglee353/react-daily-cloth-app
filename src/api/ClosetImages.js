// multi image import test file
// 참고 사이트
// https://velog.io/@rimo09/React-Create-react-app-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

import React, { useEffect, useState } from "react";

const ClosetImages = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const importAll = (r) =>
      r.keys().map((file) => ({
        // src: file.replace("./", "../assets/images/closet/top/"),
        src: file.replace("./", ""),
        name: file.replace("./", ""),
      }));

    const images = importAll(
      require.context(
        "../assets/images/closet/top",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    setImageList(images);
  }, []);

  return (
    <div>
      <h1>Closet Images</h1>
      <ul>
        {/* {console.log("imageList: ", imageList)} */}
        {imageList.map((image, index) => (
          <li key={index}>
            <img
              src={require(`../assets/images/closet/top/${image.src}`)}
              alt={image.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClosetImages;
