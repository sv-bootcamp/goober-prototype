import React from 'react';
import { connect } from 'react-redux';
import { Write, MemoList } from '../components';
import { memoPostRequest, memoListRequest } from '../actions/memo';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handlePost = this.handlePost.bind(this);
		this.loadNewMemo = this.loadNewMemo.bind(this);
		this.loadOldMemo = this.loadOldMemo.bind(this);
		
		this.state = {
			loadingState = false
		};
	}

	componentDidMount() {
		const loadMemoLoop = () => {
			this.loadNewMemo().then(
				() => {
					this.memoLoaderTimeoutId = setTimeout(loadMemoLoop, 5000);
				}
			);
		};

		this.props.memoListRequest(true).then(
			() => {
				loadMemoLoop();
			}
		);		

		const loadUntilScrollable = () => {
            // IF THE SCROLLBAR DOES NOT EXIST,
            if($("body").height() < $(window).height()) {
                this.loadOldMemo().then(
                    () => {
                        // DO THIS RECURSIVELY UNLESS IT'S LAST PAGE
                        if(!this.props.isLast) {
                            loadUntilScrollable();
                        }
                    }
                );
            }
        };
        
        this.props.memoListRequest(true).then(
            () => {
                // BEGIN NEW MEMO LOADING LOOP
                loadUntilScrollable();
                loadMemoLoop();
            }
        );
        

		$(window).scroll(() => {
            // WHEN HEIGHT UNDER SCROLLBOTTOM IS LESS THEN 250
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
                if(!this.state.loadingState){
                	this.loadOldMemo();
                    this.setState({
                        loadingState: true
                    });
                }
            } else {
                if(this.state.loadingState){
                    this.setState({
                        loadingState: false
                    });
                }
            }
        });
	}

	componentWillUnmount() {
		clearTimeout(this.memoLoaderTimeoutId);

		$(window).unbind();
	}

	loadOldMemo() {
        // CANCEL IF USER IS READING THE LAST PAGE
        if(this.props.isLast) {
            return new Promise(
                (resolve, reject)=> {
                    resolve();
                }
            );
        }
        
        // GET ID OF THE MEMO AT THE BOTTOM
        let lastId = this.props.memoData[this.props.memoData.length - 1]._id;
        
        // START REQUEST
        return this.props.memoListRequest(false, 'old', lastId).then(() => {
            // IF IT IS LAST PAGE, NOTIFY
            if(this.props.isLast) {
                Materialize.toast('You are reading the last page', 2000);
            }
        });
    }
    

	loadNewMemo() {
		if(this.props.listStatus === 'WAITING'){
			return new Promise((resolve, reject) => {
				resolve();
			});
		}

		if(this.props.memoData.length === 0) return this.props.memoListRequest(true);

		return this.props.memoListRequest(false, 'new', this.props.memoData[0]._id);

	}

	handlePost(contents) {
		return this.props.memoPostRequest(contents).then(
			() => {
				if(this.props.postStatus.status === "SUCCESS") {
					this.loadNewMemo().then(
						() => {
							Materialize.toast('success',  2000);
						}
					);
				} else {
					/* 1: not logged in , 2: empty contents */
					let $toastcontent;
					switch(this.props.postStatus.error) {
						case 1:
							$toastcontent = $("<span>you are not logged in</span>");
							Materialize.toast($toastcontent, 2000);
							setTimeout(() => {location.reload(false);}, 2000);
							break;
						case 2:
							$toastcontent = $("<span>please write something</span>");
							Materialize.toast($toastcontent, 2000);
							break;
						default:
							$toastcontent = $("<span>broke something</span>");
							Materialize.toast($toastcontent, 2000);
							break;

					}
				}
			}
		);
	}

	render() {
		const write = ( <Write onPost={this.handlePost}/> );		

		return (
			<div className="wrapper">
				{ this.props.isLoggedIn ? write : undefined }
				<MemoList data={this.props.memoData} currentUser={this.props.currentUser} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.authentication.status.isLoggedIn,
		postStatus: state.memo.post,
		currentUser: state.authentication.status.currentUser,
		memoData: state.memo.list.data,
		listStatus: state.memo.list.status,
		isLast: state.memo.list.isLast
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		memoPostRequest: (contents) => {
			return dispatch(memoPostRequest(contents));
		},
		memoListRequest: (isInitial, listType, id, username) => {
			return dispatch(memoListRequest(isInitial, listType, id, username));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);