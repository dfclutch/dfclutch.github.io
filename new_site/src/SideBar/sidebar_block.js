import React from 'react';

class SidebarBlock extends React.Component {
    render() {
        return (
            <div className={"sidebar-block"}>
                <h4><a target="_blank" href={this.props.link}>{this.props.heading}</a></h4>
                <p>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default SidebarBlock;