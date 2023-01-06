const TransBtn = (props) => {
    return ( 
        <button className="btn">
            <a href={props.link}>{props.tag}</a>
        </button>
     );
}
 
export default TransBtn;