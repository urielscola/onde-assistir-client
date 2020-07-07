import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const Container = styled.div`
  ${space};
`;

export const Topic = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.fontPrimary};
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  position: relative;
  margin-bottom: 20px;
  ${space};
  ${typography};

`;
