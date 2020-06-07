import React from 'react';
import {Layout} from '../Components/Layout';
import {useLabels} from '../store/useLabels';
import styled from 'styled-components';
import {Icon} from '../Components/Icon';
import {TopBar} from '../Components/TopBar';

const Wrapper = styled.div`
  >ul>li {
    background: #ffffff;
    margin: 8px 0;
    padding: 0 12px;
    border-radius: 4px;
    min-height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    >.icons{
      display: flex;
    }
  }
  >.createLabel{
    text-align: center;
    margin: 20px 0;
    >button{
      background: #0066cc;
      color: #ffffff;
      padding: 5px 10px;
      border-radius: 4px;
    }
  }
  
`;

const Label: React.FC = () => {
  const {labels, editLabel, deleteLabel, addLabel} = useLabels();
  return (
    <Layout name='标签'>
      <Wrapper>
        <TopBar name='全部标签'/>
        <ul>
          {labels.map((label) => {
            return <li key={label}>
              <span>{label}</span>
              <div className='icons'>
                <Icon name='edit' className='edit' edit={() => {
                  editLabel(label);
                }}/>
                <Icon name='delete' className='delete' edit={() => {
                  deleteLabel(label);
                }}/>
              </div>
            </li>;
          })}
        </ul>
        <div className='createLabel'>
          <button onClick={()=>{addLabel()}}>新建标签</button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export {Label};