import React from 'react';
import {connect} from 'react-redux';
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const {title} = this.state;
        const {createPost, showAlert} = this.props;

        if (!title.trim()) {
            return showAlert('Название поста не может быть пустым');
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }
        createPost(newPost)

        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {

        const {title} = this.state;
        const {alert} = this.props;

        return (
            <form onSubmit={this.submitHandler}>
                {alert && <Alert text={alert}/>}
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)