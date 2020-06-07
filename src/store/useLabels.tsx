import {useState} from 'react';

const useLabels = ()=>{
  const [labels] = useState(['默认','衣','食','住','行']);
  return {labels}
};

export {useLabels}