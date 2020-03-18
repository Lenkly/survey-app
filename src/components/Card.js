import styled from "@emotion/styled";

const Card = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 12px;
  padding: 20px;
  width: 85%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export default Card;
