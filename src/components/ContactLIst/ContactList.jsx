import Button from "components/Button/Button";
import PropTypes from 'prop-types';
import styles from '../ContactLIst/ContactList.module.css';

const ContactList = ({filtered,onButtonDelete}) => {
    return (
        <ul className={styles.list}>
            {filtered.map(({ name, number, id }) => {
                return (
                    <li className={styles.item} key={id}>
                        <p className={styles.p}>{name}</p>
                        <p className={styles.rightP}>{number}</p>
                        <Button text="Delete" onClick={() => {
                            onButtonDelete(id);
                        }} />
                    </li>
                );
            })}
        </ul>
        )
}

ContactList.propTypes = {
    filtered: PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,

    })),
    onButtonDelete: PropTypes.func.isRequired,
}

export default ContactList