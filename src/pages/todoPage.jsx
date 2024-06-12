import React, { useEffect, useState } from 'react'
import Header from '../components/header/header'
import CardsTodo from '../components/cardTodo/CardsTodo'
import { getTodo } from '../service/serviceTodo';
import Loader from '../components/Loader/Loader';
import Composition from '../components/Button/Composition';
import FormLogin from '../components/Form/FormLogin';
import FormInscription from '../components/Form/FormInscription';


// class function
// useEffect, useState
// rendering condition 
//props
export default function TodoPage() {
    const [retreiveTodo, setretreiveTodo] = useState([]);
    const [loading, setLoading] = useState(true);///

    useEffect(() => {
        // setLoading(true);

        getTodo()
            .then((resp) => {
                setretreiveTodo(resp.data);
            })
            .catch((error) => {
                alert(error.message)
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return (
        <div>
            <Header></Header>
            <hr></hr>

            {/* //rendering condition */}
            {loading ? <Loader></Loader> : null}

            {
                retreiveTodo.length > 0 ?
                    <CardsTodo todos={retreiveTodo}></CardsTodo>
                    :
                    <img style={{ width: '500px', margin: 'auto', marginTop: '30px' }} src='/empty.png' />
            }








            <Composition>
                {/* <Fo rmLogin></FormLogin> */}
                {/* <FormInscription></FormInscription> */}
            </Composition>
        </div>
    )


}
