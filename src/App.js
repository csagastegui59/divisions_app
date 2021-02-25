import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar.js';

const { Header, Content } = Layout
function App() {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>main content</Content>
    </Layout>
  );
}

export default App;
