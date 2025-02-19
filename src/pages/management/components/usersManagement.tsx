import UserList from "./userList/userList";


function Usersmanagement() {
  return (
    <div>
      <UserList datas={[{name:"t",id:"4",role:"student"}]} />
    </div>
  );
}

export default Usersmanagement;