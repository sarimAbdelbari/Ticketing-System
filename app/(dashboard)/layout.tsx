
import { PageContainer } from "@/components/layout/page-container";

import { Breadcrumb } from "@/components/navigation/breadcrumb";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className="mb-4">
        <Breadcrumb/>
      </div>
    {children}
    </PageContainer>
    );
}