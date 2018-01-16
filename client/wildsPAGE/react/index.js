/**
 * Created by lei_sun on 2018/1/12.
 */
import './index.less';
import React from 'react'
import ReactDOM from 'react-dom'
import Test from './test';

ReactDOM.render(
    <Test/>,
    document.getElementById('app')
);

function fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
}

var testStr = "[!'()*]";
console.log('fixedEncodeURIComponent', encodeURIComponent(testStr), fixedEncodeURIComponent(testStr));