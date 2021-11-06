import styled from 'styled-components';

import { MobileNav } from '@minded/insights-app/components/MobileNav';
import { Navbar } from '@minded/insights-app/components/Navbar';
import { Container } from '@minded/ui-components';

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;

  background: var(--color-backgrounds-primary);
`;

export function Index() {
  return (
    <PageLayout>
      <Navbar />
      <Container>
        <div>
          <div>treatment plan</div>
          <div>upcoming appoints</div>
        </div>
        <div>
          <div>daily insights</div>
        </div>
      </Container>
      <MobileNav />
    </PageLayout>
  );
}

export default Index;
