import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';

class TransitionComp extends Component {


    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }

    render() {
        return (
            <div>
                <Transition
                    in={this.state.show}
                    timeout={{
                        enter:2000,
                        exit:2000
                    }}

                    enter={true}
                    exit={true}

                    onEnter= {(node)=> {
                        console.log('entered')
                    }}

                    onExit = {(node)=> {
                        console.log('Exited')
                    }}
                   >
                    {state =>
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>}

                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;























//MOUNTONENTER AND UNMOUNTENTER ADDS OR REMOVES ELEMENT ON DOM. OTHEWISE THERE WILL BE A EMPTY 




// return (
//     <div>
//         <Transition
//             in={this.state.show}
//             timeout={2000}
//             mountOnEnter
//             unmountOnExit

//         >
//             {state =>
//                 <div style={{
//                     background: 'red',
//                     height: '100px',
//                     transition: 'all 2s ease',
//                     opacity: state === 'exited' || state === 'exiting' ? 0 : 1
//                 }}>
//                     {state}
//                 </div>}

//         </Transition>
//         <div className="showDiv" onClick={this.showDiv}>
//             Show or Hide
//         </div>
//     </div>

// )