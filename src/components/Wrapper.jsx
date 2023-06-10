import styled from "styled-components";
import { color, screen } from "../global/constant";
// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background
export default styled.section`
  max-width: 1280px;
  background: ${color.blue};
  margin: 0 auto;

  @media ${screen.mdUp} {
    background: white;
  }
`;
