import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = (props) => {
  return (
    <div className="portfolio__container--project">
      <div
        className="project"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="tech">
        <div className="tech__desc">
          <h2>{props.title}</h2>
          <a href={props.link} target="blank" className="animateLink">
            <br />
            {props.linkDesc}
            <br />
          </a>
          <br />
          <a href={props.gitLink} target="blank">
            <GitHubIcon />
          </a>
          <br />
          <br />
          <p
            className="portfolio__container--desc"
            style={{ overflowY: "scroll" }}
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
              />
              <span className="tech__image--tooltip">{props.tooltip1}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack2}
              />
              <span className="tech__image--tooltip">{props.tooltip2}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack3}
              />
              <span className="tech__image--tooltip">{props.tooltip3}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack4}
              />
              <span className="tech__image--tooltip">{props.tooltip4}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack5}
              />
              <span className="tech__image--tooltip">{props.tooltip5}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack6}
              />
              <span className="tech__image--tooltip">{props.tooltip6}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack7}
              />
              <span className="tech__image--tooltip">{props.tooltip7}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack8}
              />
              <span className="tech__image--tooltip">{props.tooltip8}</span>
            </div>
            <div className="tech__image">
              <img
                className="portfolio__container--project--tech"
                src={props.stack9}
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
