import { NavigationBack } from '../components/NavigationBack';
import { NotFoundMessage } from '../components/NotFoundMessage';
import { PageSection } from '../components/PageSection';

export const NotFoundPage = () => {
  return (
    <PageSection>
      <NavigationBack />
      <NotFoundMessage />
    </PageSection>
  );
};
