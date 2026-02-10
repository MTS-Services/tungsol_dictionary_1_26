import Admin from '@/actions/App/Http/Controllers/Admin'
import { CategoryTag } from '@/components/sections/backend/category-tag-management/category-tag'
import AdminLayout from '@/layouts/admin-layout'
import React from 'react'

export default function Index() {
  return (
   <AdminLayout pageTitle='Category & Tag Management' activeSlug={'category&tagmanagement'}>
 
    <CategoryTag />

   </AdminLayout>

  )
}
