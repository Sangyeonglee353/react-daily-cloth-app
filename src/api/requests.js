import React, { useEffect, useState } from "react";

/* 다중 이미지 호출 함수
 * [기능]
 * 여러 이미지를 하나씩 import 하지 않고, 한 번에 import
 * [문제사항]
 * require.conext() 함수 사용 시 props로 받아온 값에 대해서 동작하지 않음
 * [확인 필요사항]_231218
 * require.context()의 첫번째 arg(인자)에는 동적변수가 들어갈 수 없는지 여부
 */
export const getImages = (path) => {
  // const [imageList, setImageList] = useState([]);

  // useEffect(() => {
  //   const importAll = (r) =>
  //     r.keys().map((file) => ({
  //       src: file.replace("./", ""),
  //       name: file.replace("./", ""),
  //     }));

  //   // const images = importAll(
  //   //   require.context(path, false, /\.(png|jpe?g|svg)$/)
  //   // );

  //   const images = importAll(
  //     require.context(
  //       "../assets/images/closet/top",
  //       false,
  //       /\.(png|jpe?g|svg)$/
  //     )
  //   );

  //   setImageList(images);
  // }, [props.path]);

  // 테스트 1: 싱글리스트
  // let imageList = [];
  // const importAll = (r) =>
  //   r.keys().map((file) => ({
  //     src: file.replace("./", ""),
  //     name: file.replace("./", ""),
  //   }));

  // console.log("path: ", path);
  // console.log("path: ", `../assets/images/closet/${path}`);

  // const fullPath = `../assets/images/closet/${path}`;
  // // imageList = importAll(require.context(path, false, /\.(png|jpe?g|svg)$/));

  // // imageList = importAll(require.context(fullPath, false, /\.(png|jpe?g|svg)$/));

  // // imageList = importAll(
  // //   require.context(
  // //     `../assets/images/closet/${path}`,
  // //     false,
  // //     /\.(png|jpe?g|svg)$/
  // //   )
  // // );

  // // 만약 정적 경로만 삽입애야 하는 경우
  // imageList = importAll(
  //   require.context("../assets/images/closet/top", false, /\.(png|jpe?g|svg)$/)
  // );

  // 테스트 2: 다중 리스트
  let imageList = [];
  const importAll = (r, type) =>
    r.keys().map((file) => ({
      src: file.replace("./", ""),
      name: file.replace("./", ""),
      type: type,
    }));

  console.log("path: ", path);
  console.log("path: ", `../assets/images/closet/${path}`);

  const fullPath = `../assets/images/closet/${path}`;
  // imageList = importAll(require.context(path, false, /\.(png|jpe?g|svg)$/));

  // imageList = importAll(require.context(fullPath, false, /\.(png|jpe?g|svg)$/));

  // imageList = importAll(
  //   require.context(
  //     `../assets/images/closet/${path}`,
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );

  // 만약 정적 경로만 삽입애야 하는 경우
  imageList[0] = importAll(
    require.context("../assets/images/closet/top", false, /\.(png|jpe?g|svg)$/),
    "top"
  );

  imageList[1] = importAll(
    require.context(
      "../assets/images/closet/pants",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    "pants"
  );

  imageList[2] = importAll(
    require.context(
      "../assets/images/closet/outer",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    "outer"
  );

  imageList[3] = importAll(
    require.context(
      "../assets/images/closet/shoes",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    "shoes"
  );

  imageList[4] = importAll(
    require.context(
      "../assets/images/closet/sneakers",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    "sneakers"
  );

  imageList[5] = importAll(
    require.context("../assets/images/closet/bag", false, /\.(png|jpe?g|svg)$/),
    "bag"
  );

  imageList[6] = importAll(
    require.context(
      "../assets/images/closet/headwear",
      false,
      /\.(png|jpe?g|svg)$/
    ),
    "headwear"
  );

  return imageList;
};
