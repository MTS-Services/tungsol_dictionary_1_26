import Admin from '@/actions/App/Http/Controllers/Admin'
import { Header } from '@/components/sections/backend/word-management/header'
import WordList from '@/components/sections/backend/word-management/word-list'
import AdminLayout from '@/layouts/admin-layout'
import React from 'react'
export default function index() {
  return (
   <AdminLayout pageTitle='Word Management'>
    <Header />
    <WordList />
   </AdminLayout>
  )
}
