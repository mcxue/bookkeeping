import {useState} from 'react';

const fetchLocalRecords = ()=>{
  return JSON.parse(window.localStorage.getItem('localRecords') || '[]')
};

const useRecords = ()=>{
  const [records,setRecords] = useState(fetchLocalRecords());
  const saveRecords = (records: RecordItem[])=>{
    window.localStorage.setItem('localRecords',JSON.stringify(records))
  };
  
  const addRecord = (oneRecord: RecordItem)=>{
    const newRecords = JSON.parse(JSON.stringify(records));
    newRecords.push(oneRecord);
    // 对每条记录根据时间顺序做排序
    newRecords.sort((a: RecordItem,b:RecordItem)=>{if((a.time as string)<(b.time as string))return -1;if((a.time as string)>(b.time as string))return 1;return 0;});
    saveRecords(newRecords);
    window.alert('记账成功');
    setRecords(newRecords);
  };
  return {records,addRecord}
};

export {useRecords}