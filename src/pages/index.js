import React from 'react'
import {
    Select, Button
} from 'antd'


class App extends React.Component {
    constructor(props) {
        super(props);
        // props.add(20)
    }

    componentDidMount() {
        this.props.add(20)
    }

    clear = () => {
        this.props.clear()
    }

    add = () => {
        this.props.add(20)
    }

    render() {
        const {
            options
        } = this.props;
        console.log(this.props)
        return ( 
            <div>
                <Select 
                    style={{
                        width: '300'
                    }}
                    defaultValue = "1"
                    // listHeight = "100"
                    onPopupScroll={(e)=>{
                        const { target } = e;
                         if( target.scrollTop + target.offsetHeight === target.scrollHeight){
                             // 在这里调用接口 
                             this.add()
                          }
                    }}
                    options = {
                        options
                    }/>
                <Button onClick={this.clear} type="primary">clear</Button>
                <Button onClick={this.add} type="primary">add</Button>
            </div>

        )
    }
}





export default App;