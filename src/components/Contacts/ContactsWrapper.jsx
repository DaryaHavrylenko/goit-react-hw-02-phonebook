import PropTypes from 'prop-types';

export const ContactsWrapper = ({ title, children }) => {
    return (<>
        {title && <h2>{title}</h2>}
        <div>{ children}</div>
    </>
     
    )
}

ContactsWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}