import Admin from '@/actions/App/Http/Controllers/Admin'
import { Button } from '@/components/ui/button'
import AdminLayout from '@/layouts/admin-layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Index() {
  return (
    <AdminLayout activeSlug="examples">
       <Head title="Examples" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.em.examples.create')}>
                    <Button>Create Example</Button>
                </Link>
            </div>
    </AdminLayout>
  )
}
