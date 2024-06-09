import Form from '@/app/ui/meeting/create-form';
import Breadcrumbs from '@/app/ui/meeting/breadcrumbs';
import { fetchFilteredUsers } from '@/app/lib/data';
 
export default async function Page() {

  const users = await fetchFilteredUsers('');
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Meetings', href: '/dashboard/meeting' },
          {
            label: 'Create Meeting',
            href: '/dashboard/meeting/create',
            active: true,
          },
        ]}
      />
      <Form users={users} />
    </main>
  );
}