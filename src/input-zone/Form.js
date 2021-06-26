import React from 'react';


function Form(props) {
    const [cityValue, setCityValue] = React.useState('');

    const handleChangeCity = (e) => {
        setCityValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  
    return (

            <form className="search-input" onSubmit={handleSubmit}>
                <label className="search-input__label">Your city</label>
                <input id="inputCity" type="text" minLength="2" maxLength="70" value={cityValue} onChange={handleChangeCity} required name="cityName" className="input search-input__input" placeholder="London"/>
            </form>
    );

}
export default Form;