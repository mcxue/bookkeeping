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
    saveRecords(newRecords);
    window.alert('记账成功');
    setRecords(newRecords);
  };
  return {records,addRecord}
};

export {useRecords}