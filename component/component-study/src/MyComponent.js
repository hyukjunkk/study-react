import React, { Component } from 'react';
import PropTypes from 'prop-types';//proptypes import

class MyComponent extends Component {
    static defaultProps = {
        name : '기본이름'
    }//name 값이 없을때 default 값으로 지정

    static propTypes= {
        name: PropTypes.string, //name proptypes를 string으로 지정
        age: PropTypes.number.isRequired //필수로 존재해야되고 , 숫자
    }

    render() {
        return (
            <div>
                안녕하세요 제 이름은 {this.props.name} 입니다
                안녕하세요 제 나이는 {this.props.age} 입니다
            </div>
        );
    }
    
    
}
/* 둘중에 방법 하나 선택
MyComponent.propTypes ={
    name : PropTypes.string//name proptypes를 string으로 지정
}
*/
export default MyComponent;