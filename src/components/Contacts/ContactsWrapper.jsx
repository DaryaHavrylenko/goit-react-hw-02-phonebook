export const ContactsWrapper = ({title, children}) => {
    return (<>
        {title && <h2>{title}</h2>}
        <div>{ children}</div>
    </>
     
    )
}