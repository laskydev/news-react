import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Form.module.css'

const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'heatlh', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},
    ]

    //Call to custom hook 
    const [category, NewsSelect] = useSelect('general', OPTIONS)

    //Send category to App.js when form is submit
    const newSearch = e =>{
        e.preventDefault();
        setCategory(category)
    }
    return (
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={newSearch}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <NewsSelect/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darker-2`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;