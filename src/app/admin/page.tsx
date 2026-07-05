import type { Metadata } from 'next';
import AdminImageManager from './AdminImageManager';

export const metadata: Metadata = {
  title: 'Local Image Manager | LayeR Admin',
  description: 'Private local image management dashboard for LayeR by Laya.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminPage() {
  return <AdminImageManager />;
}
