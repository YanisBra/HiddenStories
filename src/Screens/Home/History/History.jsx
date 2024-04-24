import styled from "styled-components";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

const History = () => {
  return (
    <Container>
      <TopContent />
      <LeftContent />
      <RightContent />
      <BottomContent />
    </Container>
  );
};

const Container = styled.div``;

export default History;
