import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar.js';
import "./stylesheets/App.css";

const { Header, Content } = Layout
function App() {
  return (
    <Layout>
      <Header className="Header">
        <Navbar />
      </Header>
      <Content>main content</Content>
    </Layout>
  );
}

export default App;
