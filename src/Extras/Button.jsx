const PryBtn = (props) => {
    return ( 
        <button className="btn pry_btn">
            <a href={props.link}>{props.tag}</a>
        </button>
     );
}
 
export default PryBtn;