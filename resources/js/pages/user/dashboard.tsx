import Frontend from '@/actions/App/Http/Controllers/Frontend'
import FrontendLayout from '@/layouts/frontend-layout'
import UserDashboardLayout from '@/layouts/user-dashboard-layout'
import React from 'react'

export default function Dashboard() {
  return (
   <FrontendLayout>
    <UserDashboardLayout />
   </FrontendLayout>
  )
}
