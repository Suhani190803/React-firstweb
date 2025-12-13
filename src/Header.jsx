function Header({headerInfo,cname}){
    // const {headerInfo,cname}=props
    return(
        <div>
            <h3>Email is : {headerInfo.email}</h3>
            <h4>Password is : {cname}</h4>
        </div>
    )
}

export default Header;