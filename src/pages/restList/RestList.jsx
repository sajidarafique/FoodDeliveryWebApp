import "./restList.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import RestTable from "../../components/datatable/RestTable"

const RestList = () => {
  return (
    <div className="list1">
      <Sidebar/>
      <div className="listContainer1">
        <Navbar/>
        <RestTable />
      </div>
    </div>
  )
}

export default RestList