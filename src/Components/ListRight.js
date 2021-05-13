const ListRight = ({description, vel, cloud, pressure}) => {
    return (
        <>
            <ul>
                <li>
                    {description}
                </li>
                <li>
                    Wind speed: {vel} Km/H
                </li>
                <li>
                    Clouds: {cloud} %
                </li>
                <li>
                    Pressure: {pressure} mb
                </li>
            </ul>
        </>
    )
}

export default ListRight