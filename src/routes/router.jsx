import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import HomePage from '../pages/HomePage'
import ContentPage from '../pages/ContentPage'
import NotFoundPage from '../pages/NotFoundPage'

import ContactPage from '../pages/ContactPage'
import ServicesPage  from '../pages/ServicesPage'
import RealisationsPage from '../pages/RealisationsPage'
import AboutPage from '../pages/AboutPage'

const futurePages = [
  {
    path: '/services',
    title: 'Services',
    description:
      'This route is ready for your services, offerings, and business solutions.',
    element: <ServicesPage />,
    custom: true
  },
  {
    path: '/realisations',
    title: 'Réalisations',
    description:
      'Use this page for showcasing your projects, achievements, and case studies.',
    element: <RealisationsPage />,
    custom: true
  },
  {
    path: '/a-propos',
    title: 'À propos',
    description:
      'This route is ready for your company story, mission, leadership, and trust-building content.',
    element: <AboutPage />,
    custom: true
  },
  {
    path: '/contact',
    title: 'Contact',
    element: <ContactPage />,
    custom: true,
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      ...futurePages.map((page) => ({
        path: page.path,
        element: page.custom ? (
          page.element
        ) : (
          <ContentPage title={page.title} description={page.description} />
        ),
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
