import { useAppearance } from '@/hooks/Appearance';
import React from 'react'

export default function UserDashboardLayout() {
      const {appearance, updateAppearance} = useAppearance();
  
      React.useEffect(() => {
          if(appearance != 'light') updateAppearance('light');
      }, [appearance, updateAppearance]);
  return (
    <div className='mx-w-7xl mx-auto min-h-screen items-center flex justify-center'>
       <h2>User Dashboard</h2>
    </div>
  )
}
