import style from "../CSS/main.module.css"

const UsersPage = (props) =>{
    console.log('render(UsersPage)',props)
    return (
        <div className={style.profile}>
            USERS
        </div>
    )
}

export default UsersPage;