import styled, { css } from 'styled-components';
import Breakpoint from '../../../utils/Breakpoints';
// Styles
// TODO: Make em responsive
export const stylesBody = css`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.73;
`;

export const stylesHeader1 = css`
  font-size: 4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;

  ${Breakpoint.lg} {
    font-size: 6.4rem;
  }
`;

export const stylesHeader2 = css`
  font-size: 2.8rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  line-height: 1.4;

  ${Breakpoint.lg} {
    font-size: 4rem;
  }
`;

export const stylesHeader3 = css`
  font-size: 2rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  line-height: 1.4;

  ${Breakpoint.lg} {
    font-size: 2.8rem;
  }
`;

export const stylesHeader4 = css`
  font-size: 2rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  line-height: 1.4;
`;

// Styled components
export const TypeBody = styled.p`
  ${stylesBody}
`;

export const TypeHeader1 = styled.h1`
  ${stylesHeader1}
`;
export const TypeHeader2 = styled.h2`
  ${stylesHeader2}
`;
export const TypeHeader3 = styled.h3`
  ${stylesHeader3}
`;
export const TypeHeader4 = styled.h4`
  ${stylesHeader4}
`;
