import React, { useState, useCallback } from 'react';


import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import resumeDataNatalya from '../../resources/store/resumeDataNatalya';
import "./GalleryFullPortfolio.scss";

function GalleryFullPortfolio() {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section id="portfolio-full">
      <div className="row">
        <div className="text-center">
        </div>
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div className="content">
              <div id="other">
                <div className="portfolio-full-title">
                  <h1><span>Разное</span></h1>
                </div>
                <Gallery photos={resumeDataNatalya.portfolio[0].other} onClick={openLightbox} />
              </div>
              <div id="layouts">
                <div className="portfolio-full-title">
                  <h1><span>Макеты</span></h1>
                </div>
                <Gallery photos={resumeDataNatalya.portfolio[0].other} onClick={openLightbox} />
              </div>
              <div id="prints">
                <div className="portfolio-full-title">
                  <h1><span>Принты</span></h1>
                </div>
                <Gallery photos={resumeDataNatalya.portfolio[0].other} onClick={openLightbox} />
              </div>
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={resumeDataNatalya.portfolio[0].other.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryFullPortfolio;
