import React, { useEffect, useState } from "react";
const imgURL = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aloe-vera-plant-outside-jpg-1522875135.jpg?crop=1xw:1xh;center,top&resize=980:*";

// GET REQUEST USED FOR IMAGE ON HOME PAGE

const Home = () => {
  const [img, setImg] = useState();
  const fetchImage = async () => {
    const res = await fetch(imgURL);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div>
      <img style={{ textAlign: "center", width: "50%" }}src={img} alt="aloe picture"/>
    </div>
  )
}

export default Home