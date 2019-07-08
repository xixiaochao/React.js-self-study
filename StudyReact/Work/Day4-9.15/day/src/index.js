import React from 'react';
import ReactDOM from 'react-dom';
import Vote from "./component/Vote";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<div>
    <Vote title='小超超'/>
    <Vote title='月薪15k'/>
    <Vote title='美不美'/>
</div>, window.root);
