import { connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderCards, filterCards } from "../../Redux/actions";

const Favorites = ({ myFavorites }) => {
   
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();
    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    }
    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }
   
   
   
    return (
        <div>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>

            </select>



            {
                myFavorites.map(({ id, name, status, species, origin, gender, image, onClose, addFav, removeFav, myFavorites }) => {
                    return (
                        <Card key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    )
                })


            }


        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);