import GroupList from "./userList/groupList";

function Groupsmanagement() {
  return (
    <div>
      <GroupList datas={[
        { id: "U1001", name: "User 1", population: 4 },
        { id: "U1002", name: "User 2", population: 4 },
        { id: "U1003", name: "User 3", population: 4 }]} />
    </div>
  );
}

export default Groupsmanagement;