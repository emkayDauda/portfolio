import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <HeaderDiv>
      <div>
        <h4>Maaruf Dauda</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          temporibus sit optio quod eveniet, fugit ratione quia vero error,
          repudiandae dignissimos accusantium. Ex delectus enim nostrum.
          Similique excepturi culpa harum minus nihil, mollitia quisquam.
        </p>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/emkaydauda/image/upload/c_fill,h_3024,w_3024/v1574869041/IMG_1752.jpg"
          alt="A lovely one of me"
        />
      </div>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  /* height: 100%; */

  > div {
    width: 50%;
    /* height: 100%; */
  }

  img {
    /* height: 100%; */
    width: 100%;
  }
`;
