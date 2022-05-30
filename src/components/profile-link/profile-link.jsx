import { Link, useMatch } from 'react-router-dom';
import styles from './profile-link.module.css'

const ProfileLink = ({to, children, ...props}) => {

    const match = useMatch(to);

    return (
        <Link className={styles.link} to={to} props={{...props}}>
            <p className={`${match ? '' : 'text_color_inactive'} text text_type_main-medium`}>{children}</p>
        </Link>
    );
}

export default ProfileLink;