import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar.js';
import TableView from './components/Table.js';
import List from './components/List.js';
import "./stylesheets/App.css";

const { Header, Content } = Layout
function App() {
  return (
    <Layout>
      <Header className="Header">
        <Navbar />
      </Header>
      <List>
      </List>
      <TableView>
      </TableView>
    </Layout>
  );
}

export default App;
