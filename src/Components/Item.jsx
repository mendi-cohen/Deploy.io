
import PropTypes from 'prop-types';

const Item = ({ repo }) => {
  return (
    <div>
      <h2>{repo.name}</h2>
      <small>{new Date(repo.created_at).toLocaleDateString()}</small>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.html_url}</a>
    </div>
  );
};

Item.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
