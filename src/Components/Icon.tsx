import React from 'react';
import styled from 'styled-components';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string;
}

const Wrapper = styled.div`
  .icon{
       width: 32px; height: 32px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
  }
`;

const Icon: React.FunctionComponent<Props> = (props)=>{
  return (
    <Wrapper>
      <svg className='icon'>
        <use xlinkHref={'#'+props.name}/>
      </svg>
    </Wrapper>
    
  )
};

export {Icon}