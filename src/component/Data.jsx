
const Data= (props)=> {
    return(
        <div className="container">
            <div className="Data-list">
                <h2>Data of {props.name}</h2>
                <p>Full-Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Nationality: {props.nationality}</p>
                <p>Blood-group: {props.blood}</p>
                <p>Address: {props.address}</p>
            </div>
        </div>
    )
}

export default Data
