import { Button } from '@/components/ui/button'
import AdminLayout from '@/layouts/admin-layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Index() {
  return (
     <AdminLayout activeSlug="synonyms">
      <Head title="Synonyms" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.sm.synonyms.create")}>
          <Button>Create Synonym</Button>
        </Link>
      </div>

    </AdminLayout>
  )
}
