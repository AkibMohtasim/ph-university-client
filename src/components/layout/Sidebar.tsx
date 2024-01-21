import { Layout, Menu } from 'antd';
import { adminPaths } from '../../routes/admin.routes';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student"
}


const Sidebar = () => {
  const role = "faculty";

  let siderbarItems;

  switch (role) {
    case userRole.ADMIN:
      siderbarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
      break;

    case userRole.FACULTY:
      siderbarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
      break;

    case userRole.STUDENT:
      siderbarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
      break;

    default:
      break;
  }


  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div style={{ color: 'white', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Ph University</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={siderbarItems} />
    </Sider>
  );
};

export default Sidebar;