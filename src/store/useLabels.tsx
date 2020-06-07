import {useState} from 'react';

const fetchLocalLabels = ()=>{
  const defaultLabels = ['默认','衣','食','住','行'];
  return JSON.parse(window.localStorage.getItem('localLabels') || JSON.stringify(defaultLabels))
};

const useLabels = () => {
  const [labels, setLabels] = useState(fetchLocalLabels() as string[]);
  const saveLabels = (labels: string[])=>{
    window.localStorage.setItem('localLabels',JSON.stringify(labels));
  };
  
  const editLabel = (oldLabel: string) => {
    const newLabel = window.prompt('请输入新标签名');
    if (newLabel) {
      if (newLabel === '') {
        window.alert('标签名不能为空');
      }else if(labels.indexOf(newLabel)>=0){
        window.alert('标签名重复啦')
      } else {
        const index = labels.indexOf(oldLabel);
        const newLabels = JSON.parse(JSON.stringify(labels));
        newLabels[index] = newLabel;
        saveLabels(newLabels);
        window.alert("修改标签名成功");
        setLabels(newLabels);
      }
    }
  };
  
  const deleteLabel = (Label: string) => {
    if(labels.length<=1){
      window.alert('最后一个标签不可删除');
    }else{
      const index = labels.indexOf(Label);
      const newLabels = JSON.parse(JSON.stringify(labels));
      newLabels.splice(index, 1);
      saveLabels(newLabels);
      window.alert("删除标签成功");
      setLabels(newLabels);
    }
  };
  
  const addLabel = ()=>{
    const newLabel = window.prompt('请输入标签名');
    if(newLabel){
      if(newLabel ===''){
        window.alert('标签名不能为空')
      }else if(labels.indexOf(newLabel) >= 0){
        window.alert('标签名重复啦');
      }else{
        const newLabels = JSON.parse(JSON.stringify(labels));
        newLabels.push(newLabel);
        saveLabels(newLabels);
        setLabels(newLabels);
        window.alert('创建标签成功');
      }
    }
  };
  
  return {labels,editLabel,deleteLabel,addLabel};
};
export {useLabels};