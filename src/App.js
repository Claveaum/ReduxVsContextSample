import { Layout, Menu } from "antd";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Exemple1 from "./exemple1/exemple1";
import Exemple2 from "./exemple2/exemple2";
import Exemple3 from "./exemple3/exemple3";

function App() {
  const { Header, Content, Footer } = Layout;
  const history = useHistory();
  return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            onClick={({key}) => history.push(`exemple${key}`)}
          >
            <Menu.Item key="1">Exemple 1</Menu.Item>
            <Menu.Item key="2">Exemple 2</Menu.Item>
            <Menu.Item key="3">Exemple 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route exact path="/exemple1">
              <Exemple1 />
            </Route>
            <Route exact path="/exemple2">
              <Exemple2 />
            </Route>
            <Route exact path="/exemple3">
              <Exemple3 />
            </Route>
            <Route exact path="/">
              <Exemple1 />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>Redux or not Redux ?</Footer>
      </Layout>
  );
}

export default App;
