import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import './NewArticle.scss';

const NewArticle = () => {
  return (
    <div>
      <Link to="/">
        <Button btnType="slim">Back</Button>
      </Link>
      <p>This will be the post new article API</p>
      <Button btnType="success">Submit</Button>
    </div>
  );
};

export default NewArticle;
