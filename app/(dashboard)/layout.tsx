import { Navbar } from "@/components/layout/navbar/navbar";
import { Breadcrumb } from "@/components/navigation/breadcrumb";
import { PageContainer } from "@/components/layout/page-container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <PageContainer>
        <div className="mb-4">
          <Breadcrumb />
        </div>
        {children}
      </PageContainer>
    </>
  );
}