var MainComponent = React.createClass({

	render: function() {
	    return (
	        <div className="commentBox">
	            <h1>Comments</h1>
	        </div>
	    );
	}

});

ReactDOM.render(
    <MainComponent/>,
    $('#render-dom')
);