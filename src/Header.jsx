function Header({headerInfo,cname,children}){
    // const {headerInfo,cname}=props
    return(
        <div>
            {children}
            {/* <h3>Email is : {headerInfo.email}</h3> */}
            {/* <h4>Password is : {cname}</h4> */}
            <h3>Header Part</h3>
        </div>
    )
}

export default Header;