import React, { Component, useState, useCallback  } from 'react';
import {HashRouter as Router, Link, Switch} from "react-router-dom";

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import resumeDataNatalya from '../../resources/store/resumeDataNatalya';
import "./GalleryForPortfolio.scss";

function GalleryForPortfolio() {

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
      <section id="portfolio">
        <div className="row">
          <div className=" header-col title">
            <h1><span>Portfolio</span></h1>
          </div>
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="content">
                <Gallery photos={resumeDataNatalya.portfolio[0].other} onClick={openLightbox} />
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
          <div className="portfolio-full-button_panel">{
            resumeDataNatalya.name === 'Наталья Обухова' ?
              <Router>
                <Switch>
                  <Link to="/natalyaPortfolio">
                    <button className="portfolio-full-button_link">Посмотреть все работы</button>
                  </Link>
                </Switch>
              </Router> : null
          }
          </div>
        </div>
    </section>
    );
}

export default GalleryForPortfolio;
