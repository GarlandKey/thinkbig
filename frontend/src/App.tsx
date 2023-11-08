import {
  Routes,
  Route,
  // Navigate,
  Outlet
} from 'react-router-dom'

import {
  SideNav,
} from './components'

import {
  Dashboard,
  FrontPage,
  Login,
  Settings,
} from './pages'

// const RequireAuth = () => {
//   const token = Cookie.get('token')
//   return !token ? <Navigate to='/login' replace /> : <Outlet />
// }

// const Redirect = () => {
//   const token = Cookie.get('token')
//   return token ? <Navigate to='/' replace /> : <Navigate to='/login' replace />
// }

const Layout = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<RequireAuth />} /> */}
        <Route element={<Layout />}>
          <Route path='/'>
            <Route path='' element={<FrontPage />} />
            <Route path='*' element={<FrontPage />} />
            <Route path='/' element={<FrontPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App