import React from 'react'
import Layout from '../../components/layout/Layout'
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/layout/UserMenu'

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu></UserMenu>
                </div>
                <div className='col-md-9'>
                    <div className='card w-75 p-3'>
                        <h1>User name : {auth?.user?.name}</h1>
                        <h1>User email : {auth?.user?.email}</h1>
                        <h1>User address : {auth?.user?.address}</h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Dashboard