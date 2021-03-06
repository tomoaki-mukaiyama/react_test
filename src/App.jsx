import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoShow from "./TodoShow";
import "./App.css";

const Nabvar = styled.nav`
  border-bottom: solid 1px;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: white;
`;

const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 19px;
`;

const Wrapper = styled.div`
  width: 1000px;
  max-width: 85%;
  margin: auto;
  margin-bottom: 100px;
  padding-top: 150px;
`;

function App() {
  return (
    <>
      <Nabvar>
        <NavItems>
          <NavItem>
            <Link to="/">NEW</Link>
          </NavItem>
          <NavItem>
            <Link to="/todos">LIST</Link>
          </NavItem>
        </NavItems>
      </Nabvar>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={AddTodo} />
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/todo/:id" component={TodoShow} />
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;
