import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import { Layout } from './components/Layout';
import Home from './components/Home';
import './custom.css'


export default class App extends Component {
    static displayName = App.name;
    render() {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Layout>
        );
    }
}
