//higher order component - a component that renders another component
//reause code
//render hijacking
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>
            Info
        </h1>
        <p>
            The info is : {props.info}
        </p>
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
      <div>
          {props.isAdmin && <p>This is private Info please don't share</p>}
      <WrappedComponent {...props}/>
      </div>
    );
};

const requireAuthentication=(WrapperComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ?(<WrapperComponent {...props}/>): (<p>Please login to view the info</p>)}
        </div>
    );
};

//requireAuthentication

const AdminInfo=withAdminWarning(Info);

const AuthInfo=requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));