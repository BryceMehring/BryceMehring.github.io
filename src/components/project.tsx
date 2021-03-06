import React from 'react';
import Link from './link';

import css from './project.module.scss';

export default (project: ProjectProp) => {
  return (
    <div
      className={`col-sm-12 col-md-4 col-xl-3 p-3 m-3 border shadow rounded ${css.project}`}
    >
      <div className="text-center">
        <h3>
          <Link href={project.link}>{project.name}</Link>
        </h3>
        <p>{project.shortDescription}</p>
        <p>
          <b>Position</b>: {project.position}
        </p>
      </div>
      <div className={css.thumbnail}>
        <Link href={project.link}>
          <img
            className="img-fluid d-block m-auto"
            src={project.images.thumbnail}
            alt={project.images.alt}
          />
        </Link>
      </div>
    </div>
  );
};
