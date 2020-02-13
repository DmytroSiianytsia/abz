import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import TopBlock from "./components/topBlock/TopBlock";
import AboutMe from "./components/aboutMe/AboutMe";
import Users from "./components/users/Users";
import Registration from "./components/registration/Registration";
import Footer from "./components/footer/Footer";

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
            .then(data => this.setState({data: data}))        
    };

    showMoreUsers = () => {
        this.setState(prevState => ({
            countUsers: prevState.countUsers + 6
        }))
    };

    resetCountUsers = () => {
      this.setState({countUsers: 6})
    };

    scrollTo(coorY) {
        window.scrollTo({
            top: coorY,
            behavior: "smooth"
        });
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
                <Header scrollTo={this.scrollTo}/>
                <TopBlock scrollTo={this.scrollTo}/>
                <AboutMe scrollTo={this.scrollTo}/>
                <Users
                    data={this.state.data}
                    showMore={this.showMoreUsers}
                />
                <Registration
                    getUsers={this.getUsers}
                    resetCountUsers={this.resetCountUsers}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
