import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  margin-bottom: 12px;
`;

export const Value = styled.p`
  font-weight: 300;
  padding-top:${({ isTags }) => (isTags ? '10px' : '0 ')};
  text-align: ${({ isTags }) => (isTags ? 'left' : 'right ')};
  position: relative;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  line-height: ${({ isTags }) => (isTags ? '1.5' : '1 ')};
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.fontSecundary}; 


  span {
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.offWhite};
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 14px;
  }

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeNormal};
  }
`;
