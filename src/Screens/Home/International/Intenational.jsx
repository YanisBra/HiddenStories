import styled from "styled-components";
import Continent from "./Continent";
import SectionHeader from "../../../Components/SectionHeader";

const International = () => {
  return (
    <InternationalContainer>
      <SectionHeader
        title="INTERNATIONAL"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali."
      />
      <Continent />
    </InternationalContainer>
  );
};

const InternationalContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  /* background-color: #cfdeec; */
`;

export default International;
