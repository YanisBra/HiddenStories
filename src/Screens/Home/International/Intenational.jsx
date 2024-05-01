import styled from "styled-components";
import Continent from "./Continent";
import SectionHeader from "../../../Components/SectionHeader";

const International = () => {
  return (
    <InternationalContainer id="international">
      <SectionHeader
        title="INTERNATIONAL"
        description="Explorez les défis et les exploits des joueurs de tennis de table qui aspirent à la compétition au plus haut niveau à travers le monde."
      />
      <Continent />
    </InternationalContainer>
  );
};

const InternationalContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

export default International;
