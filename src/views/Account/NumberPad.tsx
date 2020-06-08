import React, {useState} from 'react';
import {Wrapper} from './NumberPadStyle';
import {useRecords} from '../../store/useRecords';

type Props = {
  value: RecordItem
  toDefault:()=>void;
}

const NumberPad: React.FC<Props>= (props) => {
  const [output, setOutput] = useState('0');
  const {addRecord} = useRecords();
  const editNumber = (e: React.MouseEvent) => {
    const content = (e.target as HTMLButtonElement).textContent as string;
    if ('0123456789.'.indexOf(content) >= 0 && output.length <= 16) {
      if (output === '0') {
        if ('0123456789'.indexOf(content) >= 0) {
          setOutput(content);
        }
      } else if (output.indexOf('.') >= 0 && content === '.') {
        return;
      } else {
        setOutput(output.concat(content));
      }
    } else if (content === '删除') {
      if (output.length >= 2) {
        setOutput(output.slice(0, -1));
      } else {
        setOutput('0');
      }
    } else if (content === '清空') {
      setOutput('0');
    } else if (content === '确认') {
      if(output ==='0'){
        window.alert('金额忘记写啦')
      }else{
        const newRecord = {...props.value,amount:output,time:new Date().toISOString()};
        addRecord(newRecord);
        props.toDefault();
        setOutput('0');
      }
      
    }
  };
  return (<Wrapper onClick={editNumber}>
    <div className="show">
      <div className="text">金额</div>
      <div className="number">{output}</div>
    </div>
    <div className='buttons'>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='delete'>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='clear'>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='ok'>确认</button>
      <button className='zero'>0</button>
      <button>.</button>
    </div>
  </Wrapper>);
};
export {NumberPad};