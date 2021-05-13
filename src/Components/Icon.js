

const Icon = ({urlIcon, grade}) => {

    
    let val

    if(grade>=40    ) {

        val="F"
    }else {
        val="C"
    }

    return (
        <>
            <img alt="Icon" src={urlIcon}/>
            <h3>{grade} °{val}</h3>
        </>
    )
}

export default Icon