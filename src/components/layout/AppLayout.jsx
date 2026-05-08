import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-stone-700">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
