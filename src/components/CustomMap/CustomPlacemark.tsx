const CustomPlacemark: React.FC = () => {
    return (
        <div className="placemark">
            <div className="placemark__title">Наш адрес</div>
            <div className="placemark__text">
                Санкт-Петербург, Владимирский проспект, 23, лит. А, офис 701
            </div>
            <a className="placemark__link" href="#">
                Схема проезда
            </a>
        </div>
    );
};

export default CustomPlacemark;
