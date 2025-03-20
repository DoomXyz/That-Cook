import React, { Component } from 'react';
import HomeLink from '../../components/HomeLink';
import FormAction from './FormAction';
import '../../styles/about.scss';

class About extends Component {
    handleFormSubmit = (name) => {
        console.log(`Form submitted from About with name: ${name}`);
    };

    render() {
        return (
            <div className="about-page">
                <h1>Giới thiệu</h1>
                <p>Đây là trang giới thiệu về ứng dụng của bạn.</p>
                <FormAction onSubmit={this.handleFormSubmit} />
                <HomeLink />
            </div>
        );
    }
}

export default About;