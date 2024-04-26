import styled from "styled-components";

const RightContent = () => {
  return (
    <FirstContainer>
      <div className="imageContainer">
        <img src="../public/img/test.png" />
        {/* <p>Image</p> */}
      </div>
      <div className="dateContainer">
        <p className="dateTop">19</p>
        <p className="dateBot">88</p>
      </div>
      <div className="textContainer">
        <p className="title">Title</p>
        <p className="content">
          Émergence du ping-pong comme jeu de salon en Angleterre avec des
          règles informelles.
        </p>
        <button>Click me</button>
        <div className="years">
          <p>1989</p>
          <p>1922</p>
          <p>1923</p>
          <p className="lastYear">1924</p>
        </div>
      </div>
    </FirstContainer>
  );
};

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .textContainer {
    flex: 1;
    padding: 6px;

    .title {
      font-size: 24px;
      color: #c6a785;
    }

    .content {
      font-size: 12px;
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
      color: #b3b3b3;

      .lastYear {
        color: #5d816b;
        font-weight: bold;
      }
    }
  }

  .dateContainer {
    width: 100px;
    background-color: #5d816b;

    p {
      margin: 0;
      padding-right: 6px;
      color: white;
      font-size: 50px;
      text-align: right;
    }

    .dateTop {
      margin-top: 20px;
      font-size: 50px;
    }
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 6px;
  }
`;

export default RightContent;
