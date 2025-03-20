import React, { Component } from 'react';

class FormAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', // State để lưu giá trị input
        };
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value }); // Cập nhật state khi nhập
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        alert(`You entered: ${name}`); // Thông báo giá trị đã nhập
        if (this.props.onSubmit) {
            this.props.onSubmit(name); // Gọi callback từ props nếu có
        }
    };

    render() {
        const { name } = this.state;
        return (
            <form className="form-action" onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name} // Giá trị liên kết với state
                        onChange={this.handleChange} // Cập nhật khi nhập
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormAction;