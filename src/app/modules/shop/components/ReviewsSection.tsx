import React from 'react';
import {Star, ChevronLeft, ChevronRight} from 'lucide-react';
import user1 from '../../../../_g-tech/assets/images/users/user1.png';
import user2 from '../../../../_g-tech/assets/images/users/user2.png';
import user3 from '../../../../_g-tech/assets/images/users/user3.png';

// star rating
const StarRating: React.FC<{ rating: number }> = ({rating}) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${
                        i < Math.floor(rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : i === Math.floor(rating) && rating % 1 !== 0
                                ? 'fill-yellow-400/50 text-yellow-400'
                                : 'fill-gray-200 text-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};

const ReviewsSection: React.FC = () => {
    return (
        <div className="w-full max-w-full mx-auto">
            <div className="flex flex-col md:flex-row justify-start gap-8 mb-2">
                {/* Rating Summary */}
                <div className="w-full md:w-1/3">
                    <div className="flex flex-col items-start bg-white rounded-lg shadow-sm">
                        <div className="flex items-center gap-5">
                            <h2 className="text-[40px] font-bold">4.5</h2>
                            <StarRating rating={4.5}/>
                            <span className="text-[#171A1F] text-sm">368 Reviews</span>
                        </div>

                        {/* Rating Distribution */}
                        <div className="w-full space-y-2">
                            {[
                                {stars: 5, percentage: 60},
                                {stars: 4, percentage: 25},
                                {stars: 3, percentage: 10},
                                {stars: 2, percentage: 5},
                                {stars: 1, percentage: 0}
                            ].map(({stars, percentage}) => (
                                <div key={stars} className="flex items-center gap-2">
                                    <div className="w-4 text-gray-700">{stars}</div>
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-yellow-400 rounded-full"
                                            style={{width: `${percentage}%`}}
                                        ></div>
                                    </div>
                                    <div className="text-sm text-gray-600">{percentage}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="w-full md:w-[778px]">
                    <div className="space-y-6">
                        {/* Review 1 */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="overflow-hidden bg-[#FFECCF] rounded-full w-[44px] h-[44px]">
                                    <img
                                        src={user1}
                                        alt="Annie Haley"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium text-sm">Annie Haley</div>
                                        <div className="text-[12px] text-[#424955]">3d ago</div>
                                    </div>
                                    <div>
                                        <StarRating rating={3.5}/>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[#171A1F] text-sm">
                                Commodo consequat quis nisi dolor laboris in aute occaecat quis consequat culpa
                                consectetur aliqua. Laborum cupidatat id reprehenderit non cilium irure sunt commodo.
                            </p>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="overflow-hidden bg-[#FED6CA] rounded-full w-[44px] h-[44px]">
                                    <img
                                        src={user2}
                                        alt="Green William"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium text-sm">Green William</div>
                                        <div className="text-[12px] text-[#424955]">3d ago</div>
                                    </div>
                                    <div>
                                        <StarRating rating={3.5}/>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[#171A1F] text-sm">
                                Consectetur tempor nulla veniam duis nostrud non. Non qui minim Lorem adipisicing qui
                                veniam commodo non irure aute elit incididunt qui excepteur officia sunt.
                            </p>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="overflow-hidden bg-[#C5E6D9] rounded-full w-[44px] h-[44px]">
                                    <img
                                        src={user3}
                                        alt="James Rower"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium text-sm">James Rower</div>
                                        <div className="text-[12px] text-[#424955]">3d ago</div>
                                    </div>
                                    <div>
                                        <StarRating rating={3.5}/>
                                    </div>
                                </div>
                            </div>

                            <p className="text-[#171A1F] text-sm">
                                Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor
                                mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla
                                minim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simplified Pagination */}
            <div className="flex justify-center items-center gap-1">
                <button className="p-2 rounded-md hover:bg-gray-100">
                    <ChevronLeft className="w-5 h-5"/>
                </button>

                <button className="w-8 h-8 rounded-full flex items-center justify-center">1</button>
                <button
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100 text-green-700 font-medium">2
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center">3</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center">4</button>
                <span className="px-2">...</span>
                <button className="w-8 h-8 rounded-full flex items-center justify-center">10</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center">11</button>

                <button className="p-2 rounded-md hover:bg-gray-100">
                    <ChevronRight className="w-5 h-5"/>
                </button>
            </div>
        </div>
    );
};

export default ReviewsSection;