import React from 'react'
import reviewsGraph from "../../Assets/images/reviewsGraph.png"
import { BsStarFill } from "react-icons/bs";

function Reviews() {
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]
return (
    <section className="hostReviews-container">
        <div className="hostReviews-header-div">
            <h2 className='hostReviews-header'>Your reviews</h2>
            <p className='hostReviews-headerP'>Last <span>30 days</span></p>
        </div>
        <img
            className="hostReviews-graph"
            src={reviewsGraph}
            alt="Review graph"
        />
        <h3>Reviews (2)</h3>
        {reviewsData.map((review) => (
            <div key={review.id}>
                <div className="hostReviews-reviews">
                    {[...Array(review.rating)].map((_, i) => (
                        <BsStarFill className="hostReviews-review-star" key={i} />
                    ))}
                    <div className="hostReviews-info">
                        <p className="hostReviews-name">{review.name}</p>
                        <p className="hostReviews-date">{review.date}</p>
                    </div>
                    <p className="hostReviews-context">{review.text}</p>
                </div>
                <hr />
            </div>
        ))}
    </section>
)
}

export default Reviews