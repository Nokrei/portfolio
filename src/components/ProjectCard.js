import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
const ProjectCard = (props) => {
  return (
    <div className="portfolio__container--project">
      <div className="project">
        <picture>
          <source srcSet={props.we} type="image/webp" />
          <source srcSet={props.jp} type="image/jp2" />
          <source srcSet={props.pn} type="image/png" />
          <img
            className="portfolio__container--project--image"
            src={props.image}
            alt="Piotr Mrozowski"
          />
        </picture>
        
      </div>
      <div className="tech">
        <div className="tech__desc">
          <h2>{props.title}</h2>
          <a href={props.link} target="blank" className="animateLink">
            <br />
            {props.linkDesc}
            <br />
          </a>
          <br/>
          <a href={props.gitLink} target="blank">
            <GitHubIcon/>
          </a>
          <br/>
          <br />
          <p
            className="portfolio__container--desc"
            style={{ overflowY: 'scroll' }}
          >
            {props.desc}
          </p>
        </div>

        <div className="tech__content">
          <h2>Stack:</h2> <br />
          <div className="tech__images">
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack1}
                alt="HTML"
              />
              <span className="tech__image--tooltip">{props.tooltip1}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack2}
                alt="CSS"
              />
              <span className="tech__image--tooltip">{props.tooltip2}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack3}
                alt="React"
              />
              <span className="tech__image--tooltip">{props.tooltip3}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack4}
                alt="JS"
              />
              <span className="tech__image--tooltip">{props.tooltip4}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack5}
                alt="NPM"
              />
              <span className="tech__image--tooltip">{props.tooltip5}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack6}
                alt="NodeJS"
              />
              <span className="tech__image--tooltip">{props.tooltip6}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack7}
                alt="MongoDB"
              />
              <span className="tech__image--tooltip">{props.tooltip7}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack8}
                alt="Webpack"
              />
              <span className="tech__image--tooltip">{props.tooltip8}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack9}
                alt="ExpressJS"
              />
              <span className="tech__image--tooltip">{props.tooltip9}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
