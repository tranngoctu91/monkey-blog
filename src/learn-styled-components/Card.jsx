import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  bottom: 0px;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7D6AFF.38%,
    #ffb86c 64%.35%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const UserName = styled.span`
  font-weight: 300;
  font-style: 16px;
  color: #333;
`;
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://3.bp.blogspot.com/-G5-LBBhagE8/Va7h9PEbruI/AAAAAAAAUgc/bwSRN5rVc8I/s1600/captain-america-wallpaper-hd-31-for-desktop-background.jpg"
          alt=""
        />
      </CardImage>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://3.bp.blogspot.com/-G5-LBBhagE8/Va7h9PEbruI/AAAAAAAAUgc/bwSRN5rVc8I/s1600/captain-america-wallpaper-hd-31-for-desktop-background.jpg"
              alt=""
            />
            <span>captain america</span>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>captain america</CardTitle>
          <CardAmount>12000PL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
