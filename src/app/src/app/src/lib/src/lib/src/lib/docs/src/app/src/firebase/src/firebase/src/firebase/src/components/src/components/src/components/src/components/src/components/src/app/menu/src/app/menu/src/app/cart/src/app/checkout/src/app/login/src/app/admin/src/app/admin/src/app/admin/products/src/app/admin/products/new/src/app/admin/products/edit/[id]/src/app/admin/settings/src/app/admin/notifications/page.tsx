import { NotificationsForm } from "@/components/admin/NotificationsForm";

export default function AdminNotificationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-headline">إرسال إشعارات</h1>
      <NotificationsForm />
    </div>
  );
}
