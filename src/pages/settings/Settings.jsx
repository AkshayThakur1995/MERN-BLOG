import "./settings.css"
import SideBar from '../../components/sidebar/SideBar'

function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
        <form className="settingsForm">
                <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" srcset="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="akshay" />
            <label>Email</label>
            <input type="email" placeholder="akshay@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings