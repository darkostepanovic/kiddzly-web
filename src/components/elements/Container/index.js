import styled from "styled-components";

export default styled.div`
  display: ${p => (p.flex ? "flex" : "block")};
  padding: 0 30px;
`;
