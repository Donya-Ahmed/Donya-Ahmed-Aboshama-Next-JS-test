import React from 'react'
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export default function StarRating({ rating }: { rating: number }) {
    const stars = [];
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
  
    // for full star
    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={i} className="text-primary text-xl" />);
    }
  
    //  for half star
    if (hasHalfStar) {
      stars.push(<IoStarHalf key="half" className="text-primary text-xl" />);
    }
  
    // for empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IoStarOutline key={`empty-${i}`} className="text-gray-400 text-xl" />);
    }
  
    return <div className="flex gap-2 items-center"><div className="flex">{stars}</div>({rating})</div>;
}
