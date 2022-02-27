import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryImages } from "../redux/actions/galleryAction";
import Img from "react-cool-img";

const ImageContainer = ({ image }) => {
    return (
        <div className="relative overflow-hidden rounded-md">
            <Img
                style={{ backgroundColor: "grey", width: "480", height: "320" }}
                className="w-full h-64 object-cover hover:cursor-zoom-in"
                src={process.env.REACT_APP_UPLOADS_URL + image.image}
                alt={image.title}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gray-900/80 px-5 py-2">
                <h4 className="text-sm text-white font-bold">{image.title}</h4>
                <div className="text-xs text-slate-200 my-3 font-light">
                    {image.description.length > 60 && "..."}
                    {image.description.substring(0, 60)}
                </div>
            </div>
        </div>
    );
};

const Gallery = () => {
    const { images, total, error, isLoadingImages } = useSelector(
        (state) => state.galleryState
    );

    let [pageSize, setPageSize] = useState(10);
    let [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGalleryImages({ page, pageSize }));
    }, [dispatch, page, pageSize]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl mt-14 text-center text-dodge-blue font-bold">
                Our Gallery
            </h1>
            {/* Header End */}
            {error && (
                <div className="bg-red-100 p-2 flex justify-center">
                    <p className="text-red-500">{error}</p>
                </div>
            )}
            {isLoadingImages && (
                <div className="flex my-5 items-center justify-center">
                    <div className="animate-spin">
                        <FaSpinner className="w-8 h-8" />
                    </div>
                </div>
            )}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  my-16">
                {images.map((image) => (
                    <ImageContainer key={image._id} image={image} />
                ))}
            </div>
            {/* Load more button */}
            {images.length < total && (
                <div className="flex justify-center mb-16">
                    <button
                        type="button"
                        disabled={isLoadingImages}
                        className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                        onClick={() => {
                            setPageSize(pageSize + 10);
                            setPage(1);
                        }}
                    >
                        {isLoadingImages && (
                            <FaSpinner className="mr-2 animate-spin" />
                        )}
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
