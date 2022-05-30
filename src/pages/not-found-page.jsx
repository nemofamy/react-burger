import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <h1>404. Нет такой страницы. Начните <Link to={'/'}>сначала</Link></h1>
        </>
    );
}

export default NotFoundPage;