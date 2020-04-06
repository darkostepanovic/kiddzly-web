import styled from 'styled-components';

export default styled.p`
  display: ${p => (p.inline ? 'inline' : 'block')};
  font-family: ${p => p.fontFamily || 'Gotham'};
  font-size: ${p =>
    p.theme.typography.fontSize[p.size] ||
    p.theme.typography.fontSize.regular}px;
  color: ${p => p.theme.colors[p.color] || p.theme.colors.textColor};
  line-height: ${p =>
    p.theme.typography.lineHeight[p.lh] || p.theme.typography.lineHeight.small};
`;
