import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-dvh">
        <AdminSidebar />
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
