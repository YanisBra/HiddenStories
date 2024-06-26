import styled from "styled-components";

const LeftContent = ({
  title,
  content,
  years,
  lastYear,
  dateTop,
  dateBot,
  image,
}) => {
  return (
    <FirstContainer>
      <div className="imageContainer">
        <img src={image} />
      </div>
      <div className="dateContainer">
        <p className="dateTop">{dateTop}</p>
        <p className="dateBot">{dateBot}</p>
      </div>
      <div className="textContainer">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
        <div className="years">
          {years.map((year) => (
            <p key={year}>{year}</p>
          ))}
          <p className="lastYear">{lastYear}</p>
        </div>
      </div>
    </FirstContainer>
  );
};

const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 0px;

  .textContainer {
    width: 33%;
    padding-left: 12px;
    overflow: hidden;

    .title {
      margin-top: 10px;
      font-size: 21px;
      color: #c6a785;
      font-family: "KoHo";
      font-weight: bold;
      @media (min-width: 800px) {
        font-size: 26px;
      }
    }

    .content {
      font-size: 12px;
      font-weight: 300;
      @media (min-width: 800px) {
        font-size: 17px;
      }
    }

    .years {
      margin-top: 20px;
      margin-bottom: 0px;
      color: #b3b3b3;
      font-weight: lighter;
      font-family: "Kumar One";
      font-size: 12px;
      @media (min-width: 800px) {
        font-size: 1rem;
      }
      p {
        margin-bottom: 10px;
      }

      .lastYear {
        color: #5d816b;
        font-weight: bold;
      }
    }
  }

  .dateContainer {
    width: 33%;
    min-width: 115px;
    max-width: 150px;
    background-color: #5d816b;

    p {
      margin: 0;
      padding-right: 6px;
      color: white;
      font-size: 66px;
      font-family: "Kumar One";
      text-align: right;
    }

    .dateTop {
      font-size: 66px;
    }
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    padding: 6px;
    z-index: 1;

    img {
      max-width: 60vw;
    }

    @media (min-width: 800px) {
      justify-content: flex-end;
      img {
        max-width: 30vw;
      }
    }
  }
`;

export default LeftContent;
