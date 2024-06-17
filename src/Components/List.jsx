
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ repos }) => {
  return (
    <div>
      <div className="list-group">
        {repos.map((repo, index) => (
          <Item key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default List;
