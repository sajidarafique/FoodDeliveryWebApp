import "./ApproveRestList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AppRestTable from "../../pages/ApproveRest/ApproveRestList"

const ApproveRestList = () => {
  return (
    <div className="list1">
      <Sidebar/>
      <div className="listContainer1">
        <Navbar/>
        <AppRestTable />
      </div>
    </div>
  )
}

export default ApproveRestList;