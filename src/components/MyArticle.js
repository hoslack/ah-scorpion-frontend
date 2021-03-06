import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import ReadTime from './ReadTime';

const MyArticle = ({
  title,
  description,
  createdAt,
  slug,
  beginDelete,
  averageRating,
  likes,
  dislikes,
  body,
}) => (
  <div className="my-article">
    <h1>
      <Link to={`/article/${slug}`} className="article-title">
        {title}
      </Link>
    </h1>
    <p>{description}</p>
    <div>
      <span className="text-muted">
        <small>
          Created:
          {new Date(createdAt).toDateString()}
        </small>
      </span>
      <span className="ml-5">
        <Button bsStyle="primary link" href={`article/${slug}/edit`}>
          Edit
        </Button>
        <Button
          bsStyle="danger ml-2"
          data-toggle="modal"
          data-target="#confirmDeleteModal"
          onClick={() => beginDelete(slug)}
        >
          Delete
        </Button>
      </span>
    </div>
    <hr style={{ margin: '0.7em' }} />
    <div className="row">
      <div className="col-1 text-center">
        <i className="text-warning fa fa-star" />
        <br />
        <small>{averageRating || ' - '}</small>
      </div>
      <div className="col-1 text-center">
        <i className="text-success fa fa-thumbs-up" />
        <br />
        <small>{likes}</small>
      </div>
      <div className="col-1 text-center">
        <i className="text-danger fa fa-thumbs-down" />
        <br />
        <small>{dislikes}</small>
      </div>
      <ReadTime body={body} />
    </div>
  </div>
);

MyArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  averageRating: PropTypes.number,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  beginDelete: PropTypes.func.isRequired,
  body: PropTypes.shape().isRequired,
};

MyArticle.defaultProps = {
  averageRating: null,
};

export default MyArticle;
