import { StyledPageSection, PageSectionProps } from './style';

export const PageSection = ({
  children,
  direction,
  $backgroundcolor,
}: PageSectionProps) => {
  return (
    <StyledPageSection
      direction={direction}
      $backgroundcolor={$backgroundcolor}
    >
      {children}
    </StyledPageSection>
  );
};
