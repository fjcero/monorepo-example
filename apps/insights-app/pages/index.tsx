import styled from 'styled-components';

import { MobileNav } from '@minded/insights-app/components/MobileNav';
import { Navbar } from '@minded/insights-app/components/Navbar';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Navbar />
      <div>
        <div>treatment plan</div>
        <div>upcoming appoints</div>
      </div>
      <div>
        <div>daily insights</div>
      </div>
      <MobileNav />
    </StyledPage>
  );
}

export default Index;
