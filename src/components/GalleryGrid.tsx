const GalleryGrid = () => {
  const demos = [
    { id: 1, src: "/images/demo1.webp", alt: "Demo Website 1" },
    { id: 2, src: "/images/demo2.webp", alt: "Demo Website 2" },
    { id: 3, src: "/images/demo3.webp", alt: "Demo Website 3" },
    { id: 4, src: "/images/demo4.webp", alt: "Demo Website 4" },
    { id: 5, src: "/images/demo5.webp", alt: "Demo Website 5" },
    { id: 6, src: "/images/demo6.webp", alt: "Demo Website 6" },
  ];

  return (
    <div className="ekit-wid-con">
      <div className="ekit_gallery_portfolio ekit_gallery_grid elementskit-layout-masonary ekit_gallery_column--3">
        <div className="elementskit-gallery-wrapper gallery-masonary-wrapper">
          {demos.map((demo) => (
            <div key={demo.id} className="ekit_gallery_grid_item ekit_gallery__filter-one">
              <div
                className="elementskit-single-portfolio-item ekit-gallery-portfolio-tilt"
                data-tilt-scale="1.2"
                data-tilt-maxtilt="20"
                data-tilt-perspective="600"
                data-tilt-maxglare="0.6"
              >
                <div className="elementskit-portfolio-thumb">
                  <img
                    width="800"
                    height="914"
                    decoding="async"
                    className="elementskit-grid__img"
                    src={demo.src}
                    alt={demo.alt}
                  />
                </div>
                <div className="elementskit-hover-area">
                  <div className="elementskit-hover-content ekit_vertical_alignment_center"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
