import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TopBlock from "./components/TopBlock/TopBlock";
import AboutMe from "./components/AboutMe/AboutMe";
import Users from "./components/Users/Users";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    data: null,
    countUsers: 6
  };

  getUsers = () => {
    const urlUsers =
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${this.state.countUsers}`;
    fetch(urlUsers)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  };

  showMoreUsers = () => {
    this.setState(prevState => ({
      countUsers: prevState.countUsers + 6
    }))
  };

  resetCountUsers = () => {
    this.setState({ countUsers: 6 })
  };

  scroll(coorY) {
    window.scrollTo({
      top: coorY,
      behavior: "smooth"
    });
  }

  scrollTo = block => {
    const main = 0;
    const aboutMe = document.getElementById('topBlock').getBoundingClientRect().height + main;
    const users = document.getElementById('aboutMe').getBoundingClientRect().height + aboutMe;    
    const signUp = document.getElementById('users').getBoundingClientRect().height + users;

    switch (block) {
      case 'main':
        return this.scroll(main);

      case 'aboutMe':
        return this.scroll(aboutMe);

      case 'users':
        return this.scroll(users);

      case 'signUp':
        return this.scroll(signUp);

      default:
        return this.scroll(0)
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countUsers !== prevState.countUsers) {
      this.getUsers()
    }
  }

  render() {
    return (
      <div className="App">
        <Header scrollTo={this.scrollTo} />
        <TopBlock scrollTo={this.scrollTo} />
        <AboutMe scrollTo={this.scrollTo} />
        <Users
          data={this.state.data}
          showMore={this.showMoreUsers}
        />
        <Registration
          getUsers={this.getUsers}
          resetCountUsers={this.resetCountUsers}
          scrollTo={this.scrollTo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
