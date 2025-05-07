import React from 'react';

const ProductDetailSkeleton = () => {
    return (
        <div className="min-h-[823px] w-full py-10 animate-pulse">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb Skeleton */}
                <div className="flex gap-3 text-sm mb-8">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <span className="text-gray-500">&gt;</span>
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <span className="text-gray-500">&gt;</span>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <span className="text-gray-500">&gt;</span>
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>

                {/* Product Detail Section Skeleton */}
                <div className="flex flex-col lg:flex-row justify-between gap-20 py-5">
                    {/* Product Images Section Skeleton */}
                    <div className="flex gap-5 w-full lg:w-1/2">
                        <div className="flex flex-col gap-3">
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[80px] h-[80px] rounded-md bg-gray-200"
                                ></div>
                            ))}
                        </div>

                        {/* Main Image Skeleton */}
                        <div className="flex-1">
                            <div className="relative w-full h-[450px] rounded-lg bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Product Info Section Skeleton */}
                    <div className="w-full lg:w-1/2">
                        {/* Product Title and Badge */}
                        <div className="mb-2">
                            <div className="h-8 w-3/4 bg-gray-200 rounded mb-1"></div>
                            <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
                        </div>

                        {/* Product Price Skeleton */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-24 bg-gray-200 rounded"></div>
                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        </div>

                        {/* Product Description Skeleton */}
                        <div className="space-y-2 mb-6">
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                        </div>

                        {/* Product Ratings Skeleton */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex gap-3">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-[20px] h-[20px] bg-gray-200 rounded-full"
                                    ></div>
                                ))}
                                <div className="h-4 w-8 bg-gray-200 rounded ml-2"></div>
                            </div>
                        </div>

                        {/* Shipping Info Skeleton */}
                        <div className="flex flex-col gap-2 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-[26px] h-[26px] bg-gray-200 rounded-full"></div>
                                <div className="h-4 w-48 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-[26px] h-[26px] bg-gray-200 rounded-full"></div>
                                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        {/* Product Size Selection Skeleton */}
                        <div className="mb-6">
                            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                            <div className="w-full lg:w-[556px] h-[53px] bg-gray-200 rounded-[4px]"></div>
                        </div>

                        {/* Quantity Selector Skeleton */}
                        <div className="mb-8">
                            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                            <div className="flex items-center gap-3">
                                <div className="w-[39px] h-[44px] bg-gray-200 rounded-l-md"></div>
                                <div className="w-[38px] h-[43px] bg-gray-200"></div>
                                <div className="w-[43px] h-[44px] bg-gray-200 rounded-r-md"></div>
                            </div>
                        </div>

                        {/* Action Buttons Skeleton */}
                        <div className="flex gap-12">
                            <div className="h-[52px] w-[256px] bg-gray-200 rounded-[4px]"></div>
                            <div className="h-[52px] w-[256px] bg-gray-200 rounded-[4px]"></div>
                        </div>
                    </div>
                </div>

                {/* Related Products Skeleton */}
                <div>
                    <div className="h-10 w-48 bg-gray-200 rounded py-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="space-y-4">
                                <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                                <div className="h-4 w-full bg-gray-200 rounded"></div>
                                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                                <div className="flex gap-2">
                                    <div className="h-8 w-16 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-12 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;