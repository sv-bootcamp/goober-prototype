import React from 'react';
import TimeAgo from 'react-timeago';

class Memo extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: props.data.contents
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleStar = this.handleStar.bind(this);
    }
    
    toggleEdit() {
        if(this.state.editMode) {
            let id = this.props.data._id;
            let index = this.props.index;
            let contents = this.state.value;
            
            this.props.onEdit(id, index, contents).then(() => {
                this.setState({
                    editMode: !this.state.editMode
                });
            })
        } else {
            this.setState({
                editMode: !this.state.editMode
            });
        }
    }

    handleChange(e) {
    	this.setState({
    		value: e.target.value
    	});
    }

    handleRemove() {
        let id = this.props.data._id;
        let index = this.props.index;
        this.props.onRemove(id, index);
    }

    handleStar() {
        let id = this.props.data._id;
        let index = this.props.index;
        this.props.onStar(id, index);
    }

	render() {
		const { data, ownership } = this.props;

		const dropDownMenu = (
			<div className="option-button">
                <a className='dropdown-button'
                     id={`dropdown-button-${data._id}`}
                     data-activates={`dropdown-${data._id}`}>
                    <i className="material-icons icon-button">more_vert</i>
                </a>
                <ul id={`dropdown-${this.props.data._id}`} className='dropdown-content'>
                    <li><a onClick={this.toggleEdit}>Edit</a></li>
                    <li><a onClick={this.handleRemove}>Remove</a></li>
                </ul>
            </div>
		);

        // EDITED info
        let editedInfo = (
            <span style={{color: '#AAB5BC'}}> · Edited <TimeAgo date={this.props.data.date.edited} live={true}/></span>
        );

        let starStyle = (this.props.data.starred.indexOf(this.props.currentUser) > -1) ? { color: '#ff9980' } : {} ;

		const memoView = (<div className="card">
                    <div className="info">
                        <Link to={'/wall/${this.props.data.writer}'} className="username">{this.props.data.writer}</Link> wrote a log · <TimeAgo date={this.props.data.date.created} />
                        { this.props.data.is_edited ? editedInfo : undefined}
                        { this.propsownership ? dropDownMenu : undefined}
                    </div>
                    <div className="card-content">
                        {data.contents}
                    </div>
                    <div className="footer">
                        <i className="material-icons log-footer-icon star icon-button" style={starStyle} onClick={this.handleStar}>star</i>
                        <span className="star-count">{this.props.data.starred.length}</span>
                    </div>
                </div>);

		const editView = (
            <div className="write">
                <div className="card">
                    <div className="card-content">
                        <textarea
                            className="materialize-textarea" value={this.state.value} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="card-action">
                        <a onClick={this.toggleEdit}>OK</a>
                    </div>
                </div>
            </div>
        );

		return (
			<div className="container memo">
                { this.state.editMode ? editView : memoView}
            </div>
		);
	}

	componentDidUpdate() {
		$("#dropdown-button-"+this.props.data._id).dropdown({
			belowOrigin: true
		});
	}

	componentDidMount() {
		$("#dropdown-button-"+this.props.data._id).dropdown({
			belowOrigin: true
		});
	}
}


Memo.propTypes = {
	data: React.PropTypes.object,
	ownership: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    index: React.PropTypes.number,
    onRemove: React.PropTypes.func,
    onStar: React.PropTypes.func,
    starStatus: React.PropTypes.object,
    currentUser: React.PropTypes.string
};

Memo.defaultProps = {
	data: {
		_id: 'id1234',
		writer: 'Sirius',
		contents: 'contents',
		is_edited: false,
		date: {
			edited: new Date(),
			created: new Date()
		},
		starred: []
	},
	ownership: true,
    onEdit: (id, index, contents) => {
        console.error('onEdit func not defined');
    },
    index: -1,
    onRemove: (id, index) => {
        console.error('remove func not defined');
    },
    onStar: (id, index) => {
        console.error('star func not defined');
    },
    starStatus: {},
    currentUser: ''
};

export default Memo;