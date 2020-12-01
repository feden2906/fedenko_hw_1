import React, {Component} from 'react';
import './user.css'


class User extends Component {


    render() {
        let {car: {model, madeYear, power, color, driver: {name, age, gender, experience}}, clsName} = this.props;
        return (
            <div className={clsName}>
                {<h2>Model car - <b>{model}</b></h2>}
                {<h3>Рік випуску {madeYear} - Потужність {power} - Колір {color}</h3>}
                {<h2>Driver - {name}</h2>}
                {<h3>Вік {age} - Стать {gender} - Стаж {experience.toString()}</h3>}
            </div>
        );
    }
}

export default User;