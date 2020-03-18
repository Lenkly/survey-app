import styled from "@emotion/styled";

const Button = styled.button`
  background: ${props => props.theme.colors.backgroundButton};
  height: 70px;
  width: 250px;
  border-radius: 12px;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export default Button;
