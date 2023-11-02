import React from 'react';
import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

class StarRating extends React.Component {
  render() {
    const rating = this.props.rating; // The numerical rating value

    // Determine the number of full and empty stars
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full-star"><BsFillStarFill /></span>);
    }

    if (halfStar) {
      stars.push(<span key="half" className="star half-star"><BsStarHalf /></span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={i + fullStars} className="star empty-star"><BsStar /></span>);
    }

    return <div className="star-rating">{stars}</div>;
  }
}

export default StarRating;