export default function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return (
        <div className="col s12 m7">
            <div className="card" id={imdbID}>
                <div className="card-image">
                    <img src={Poster} alt={Title} />
                    <span className="card-title">{Title}</span>
                </div>
                <div className="card-content">
                    <p>{Year}<span className="right">{Title}</span></p>
                </div>
            </div>
        </div>
    )
}