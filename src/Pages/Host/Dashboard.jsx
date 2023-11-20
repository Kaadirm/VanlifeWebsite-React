import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'
import { getHostVans } from '../../api'
import { BsStarFill } from 'react-icons/bs';

export async function loader () {
  await requireAuth()
  return getHostVans()
}

function Dashboard() {
  const vans = useLoaderData()

    return (
        <>
            <div className="hostDashboard-container">
                <section className="hostDashboard-header">
                    <div className="hostDashboard-header-info">
                        <h1>Welcome!</h1>
                        <p>Income last <span>30 days</span></p>
                        <h2>$2,260</h2>
                    </div>
                    <Link to="income">Details</Link>
                </section>
                <section className="hostDashboard-reviews">
                    <div className='hostDashboard-reviews-info'>
                        <h2>Review score</h2>
                        <div>
                            <BsStarFill className="star" />
                            <p>
                                <span>5.0</span>/5
                            </p>
                        </div>
                    </div>
                    <Link to="reviews">Details</Link>
                </section>
                <section className="hostDashboard-vans">
                    <div className="hostDashboard-vans-header">
                        <h2>Your listed vans</h2>
                        <Link to="vans">View all</Link>
                    </div>
                    {vans.map((item) => (
                    <div className="hostDashboard-vans-block" key={item.id}>
                        <Link to={`vans/${item.id}`}>
                            <div className='hostDashboard-vans-frame'>
                                <img src={item.imageUrl} alt={`Photo of ${item.name}`} />
                                <div className="hostDashboard-vans-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}/day</p>
                                </div>
                            </div>
                            <div className='hostDashboard-vans-view'>View</div>
                        </Link>
                    </div>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Dashboard