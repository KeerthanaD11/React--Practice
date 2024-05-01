function Body(){

    var Fruit1 = "Mango";
    const Fruit2 = "Grapes";
    return(
        <><ul>
            <li>Apple</li>
            <li>{Fruit1}</li>
            <li>{Fruit2.toUpperCase()}</li>
        </ul>
        <hr></hr>
        </>
    );
}

export default Body;