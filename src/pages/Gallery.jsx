import React, { useEffect, useState } from "react";
import { FaSpinner, FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryImages } from "../redux/actions/galleryAction";
import Img from "react-cool-img";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ImageContainer = ({ image, openZoomView = () => {} }) => {
    return (
        <div className="relative overflow-hidden rounded-md">
            <Img
                style={{ backgroundColor: "grey", width: "480", height: "320" }}
                className="w-full object-fit aspect-auto hover:cursor-zoom-in"
                src={image.image}
                alt={image.title}
                onClick={openZoomView}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gray-900/80 px-5 py-4">
                <h4 className="text-sm text-white font-bold">{image.title}</h4>
                {/* <div className="text-xs text-slate-200 my-3 font-light">
                    {image.description.length > 60 && "..."}
                    {image.description.substring(0, 60)}
                </div> */}
            </div>
        </div>
    );
};

const ViewImageModal = ({
    images,
    start = 3,
    open = false,
    closeZoomView = () => {},
}) => {
    return (
        <div
            className={`fixed ${
                open ? "" : "hidden"
            } inset-0 bg-black bg-opacity-80 overflow-hidden`}
        >
            <div className="absolute right-2 sm:right-5 top-2 sm:top-5 z-[855858]">
                <FaTimesCircle
                    className="text-white text-3xl cursor-pointer"
                    onClick={closeZoomView}
                />
            </div>
            <Splide
                options={{
                    arrows: true,
                    perPage: 1,
                    start: start,
                }}
                aria-label="React Splide Example"
            >
                {images?.map(({ image, _id, title }) => (
                    <SplideSlide key={_id}>
                        <div className="w-[80vw] h-[80vh] mt-10 m-auto">
                            <Img
                                className="w-auto h-auto"
                                src={image}
                                alt={title}
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

const Gallery = () => {
    const { images, total, error, isLoadingImages } = useSelector(
        (state) => state.galleryState
    );

    let [pageSize, setPageSize] = useState(10);
    let [page, setPage] = useState(1);
    let [zoomViewOpen, setZoomViewOpen] = useState(false);

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
                    <ImageContainer
                        openZoomView={() => setZoomViewOpen(true)}
                        key={image._id}
                        image={image}
                    />
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

            <ViewImageModal
                images={images}
                closeZoomView={() => setZoomViewOpen(false)}
                open={zoomViewOpen}
            />
        </div>
    );
};

export default Gallery;
