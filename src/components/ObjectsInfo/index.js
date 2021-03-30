import React from 'react';
import * as ReactRedux from "react-redux";
// import * as Components from "../../components";
// import "./index.css";

export const ObjectsInfo = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="objects-info" className="container">
            <div className="row row-cols-3 justify-content-center">
                <div className="col">
                    <p> Два 9-этажных жилых домов были построены за 9 месяцев. Такой короткий срок сдачи объекта произведен за счет современного панельной технологии строительства. </p>
                    <h4> Описание объекта: </h4>
                    <p> Дома были построены по 106 улучшенной серии. Основные достоинства в отличии от старых серий это улучшенная планировка, теплоустойчивость, звукоизоляция. Общая площадь объекта составила - 6300 м2. </p>
                </div>
                <div className="col">
                    <h2> Факты </h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Город:</td>
                                <td>Бишкек</td>
                            </tr>
                            <tr>
                                <td>Начало:</td>
                                <td>Март 2017</td>
                            </tr>
                            <tr>
                                <td>Сдача:</td>
                                <td>Ноябрь 2017</td>
                            </tr>
                            <tr>
                                <td>Статус:</td>
                                <td>Завершен</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}