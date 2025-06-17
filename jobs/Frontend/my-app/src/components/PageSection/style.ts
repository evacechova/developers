import styled from 'styled-components';

export type PageSectionProps = {
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  $backgroundcolor?: 'unset' | '#e0e0e0';
};

export const StyledPageSection = styled.div<PageSectionProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 90vw;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: var(--br-rounded);
  background-color: ${({ $backgroundcolor }) => $backgroundcolor || 'unset'};
`;
