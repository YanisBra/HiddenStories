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
        {/* <p>Image</p> */}
      </div>
      <div className="dateContainer">
        <p className="dateTop">{dateTop}</p>
        <p className="dateBot">{dateBot}</p>
      </div>
      <div className="textContainer">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
        <button>Click me</button>
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

  .textContainer {
    width: 33%;
    padding: 6px;
    /* background-color: #c68d8d; */
    overflow: hidden;

    .title {
      margin-top: 15px;
      font-size: 21px;
      color: #c6a785;
      font-family: "KoHo";
      font-weight: bold;
    }

    .content {
      font-size: 12px;
      font-weight: lighter;
    }

    button {
      background-color: #d9d9d9;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      padding: 6px;

      &:hover {
        cursor: pointer;
      }
    }

    .years {
      margin-top: 10px;
      color: #b3b3b3;
      font-weight: lighter;
      font-family: "Inter";
      font-size: 12px;
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
    width: 120px;
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
      margin-top: 20px;
      font-size: 66px;
    }
  }

  .imageContainer {
    /* background-color: #7593b4; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    padding: 6px;
    z-index: 1;
  }
`;

export default LeftContent;
