import AdminSidebar from '@/components/admin/AdminSidebar';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-slate-50 min-h-screen text-slate-900">
            <AdminSidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <Toaster position="top-right" />
                <div className="max-w-6xl mx-auto">{children}</div>
            </main>
        </div>
    );
}
